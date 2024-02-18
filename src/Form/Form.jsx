import './form.scss';
import { useContext } from 'react';
import { TodoContext } from '../Context';

export default function Form() {

    const { handler_add } = useContext(TodoContext);

    return (
        <div className="form">
            <input placeholder="title note" required></input>
            <input placeholder="description note" required></input>
            <input placeholder="tags note" required></input>
            <button onClick={(e) => handler_add(e)}>Add</button>
        </div>
    )
}