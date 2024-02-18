import { useContext } from 'react';
import { TodoContext } from '../Context';
import ListItem from '../List/ListItem';

export default function Filter() {

    const { find } = useContext(TodoContext);

    return (
        <ul className="list">
            {find.map((elem, index) => <ListItem key={index} {...elem} />)}
        </ul>
    )
}