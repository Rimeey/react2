import { useContext } from 'react';
import { TodoContext } from '../Context';

export default function ListItem({ title, description, tag, id }) {

    const { handler_delete } = useContext(TodoContext);

    return (
        <li className='listItem'>
            <h1 className='title_note'>{title}
                <p className='delete' onClick={() => handler_delete(id)}>X</p>
            </h1>
            <p className='description_note'>{description}</p>
            <p className='tag_note'>{tag}</p>
        </li>
    )
}