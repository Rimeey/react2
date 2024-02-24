import './form.scss';
import { useContext, useRef } from 'react';
import { TodoContext } from '../../Context';

export default function Form() {

    const { handler_add } = useContext(TodoContext);

    const title = useRef(null);
    const description = useRef(null);
    const tag = useRef(null);

    const handler_added = function(e) {
        handler_add(title, description, tag)
        let inputs = e.target.parentElement.childNodes;
        inputs.forEach(elem => { elem.value = '' });
    }

    return (
        <div className="form">
            <input placeholder="Title" ref={title}></input>
            <input placeholder="Description" ref={description}></input>
            <input placeholder="Tags" ref={tag}></input>
            <button onClick={(e) => handler_added(e)}>Add</button>
        </div>
    )
}