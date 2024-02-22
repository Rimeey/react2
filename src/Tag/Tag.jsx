import './tag.scss';
import { useContext } from 'react';
import { TodoContext } from '../Context';
import TagItem from './TagItem';

export default function List() {
    const { todo } = useContext(TodoContext);

    let allTags = [];
    todo.forEach(item => {
        const words = item.tag.split(/\s+/);
        allTags = allTags.concat(words);
    });

    const uniqueTags = Array.from(new Set(allTags));

    const show_all = function() {
        if(uniqueTags.length > 0) {
            return (<TagItem tag="All"/>)
        }
    }

    return (
        <>
        <div className='filter_tags'>
            {show_all()}
            {uniqueTags.map((tag, index) => (
                <TagItem key={index} tag={tag} />
            ))}
        </div>
        </>
    );
}