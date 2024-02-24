import { useContext } from 'react';
import { TodoContext } from '../../Context';

export default function ListItem({ title, description, tag, id }) {

    const { handler_delete, handler_open, setInfo } = useContext(TodoContext);

    return (
        <li className='listItem'>
            <h1 className='title_note'>{title}
                <div className='clicks'>
                    <p className='edit' onClick={() => {
                        handler_open();
                        setInfo({id: id, title: title, description: description, tag: tag});
                        }}>Edit</p>
                    <p className='delete' onClick={() => handler_delete(id)}>X</p>
                </div>
            </h1>
            <p className='description_note'>{description}</p>
            <p className='tag_note'>{tag}</p>
        </li>
    )
}