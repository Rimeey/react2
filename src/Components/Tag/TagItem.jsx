import { useContext } from "react";
import { TodoContext } from "../../Context";

export default function TagItem({ tag }) {
    const { handler_find } = useContext(TodoContext);

    return (
        <p onClick={(e) => handler_find(tag, e)}>{tag}</p>
    );
}