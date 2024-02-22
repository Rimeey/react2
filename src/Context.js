import { createContext, useState } from "react";

export const TodoContext = createContext();

export function Context(props) {
    const [todo, setTodo] = useState([]);

    const [find, setFind] = useState([]);


    const handler_add = function (e) {
        let inputs = e.target.parentElement.childNodes;
        if (inputs[0].value !== '' && inputs[1].value !== '' && inputs[2].value !== '') {
            setTodo([...todo, { title: inputs[0].value, description: inputs[1].value, tag: inputs[2].value, id: Date.now() }]);
            setFind([...find, { title: inputs[0].value, description: inputs[1].value, tag: inputs[2].value, id: Date.now() }]);
            inputs.forEach(elem => { elem.value = '' });
        }
    }

    const handler_find = function (tag) {
        let foundTasks = null;
        if(tag === 'All') {
            foundTasks = todo.filter(elem => elem);
        } else {
            foundTasks = todo.filter(elem => elem.tag.includes(tag));
        }
        setFind(foundTasks);
    }

    const handler_delete = (id) => {
        setTodo(todo.filter(elem => elem.id !== id));
        setFind(find.filter(elem => elem.id !== id));
    }

    const value = { todo, setTodo, handler_add, handler_find, find, handler_delete };

    return <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
}