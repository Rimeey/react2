import './form.scss';
import { useContext } from 'react';
import { TodoContext } from '../Context';

export default function Form() {

    const { handler_add } = useContext(TodoContext);

    return (
        <div className="form">
            <input placeholder="title note"></input>
            <input placeholder="description note"></input>
            <input placeholder="tags note"></input>
            <button onClick={(e) => handler_add(e)}>Add</button>
        </div>
    )
}