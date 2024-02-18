import './list.scss';
import ListItem from './ListItem';
import { useContext } from 'react';
import { TodoContext } from '../Context';

export default function List() {

    const { todo } = useContext(TodoContext);


    return (
        <ul className="list">
            {todo.map((elem, index) => <ListItem key={index} {...elem} />)}
        </ul>
    )
}