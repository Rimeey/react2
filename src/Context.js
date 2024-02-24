import { createContext, useState } from "react";
import useModal from "./Hooks/useModal";

export const TodoContext = createContext();

export function Context(props) {

    // Main todo
    
    const [todo, setTodo] = useState([]);

    const [find, setFind] = useState([]);

    const handler_add = function (t, d, t2) {
        if (t.current.value !== '' && d.current.value !== '' && t2.current.value !== '') {
            setTodo([...todo, { title: t.current.value, description: d.current.value, tag: t2.current.value, id: Date.now() }]);
            setFind([...find, { title: t.current.value, description: d.current.value, tag: t2.current.value, id: Date.now() }]);
        }
    }

    const handler_find = function (tag, e) {
        let found = [];
        if(tag === 'All') {
            found = todo.filter(elem => elem);
        } else {
            found = todo.filter(elem => elem.tag.includes(tag));
        }
        setFind(found);

        e.target.parentElement.childNodes.forEach(elem => {elem.style.backgroundColor = null});
        e.target.style.backgroundColor = 'black';
    }

    const handler_delete = (id) => {
        const updated = todo.filter(elem => elem.id !== id);
        setTodo(updated);
        setFind(updated);
    }

    // modal window edits

    const [info, setInfo] = useState({id: null, title: null, description: null, tag: null});

    const [modal, handler_open, handler_close] = useModal();

    const handler_edit = (title, description, tag) => {
        if (title.current.value !== '' && description.current.value !== '' && tag.current.value !== '') {
            const updated = todo.map(elem => {
                if (elem.id === info.id) {
                    return { title: title.current.value, description: description.current.value, tag: tag.current.value, id: info.id};
                }
                return elem;
            });
    
            setTodo(updated);
            setFind(updated);
        }
    }

    const value = { todo, setTodo, handler_add, handler_find, find, handler_delete, handler_edit, modal, handler_open, handler_close, info, setInfo };

    return <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
}