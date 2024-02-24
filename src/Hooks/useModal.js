import { useState } from "react";

export default function useModal() {
    const [modal, setModal] = useState(null);

    const handler_open = () => {
        setModal(true);
    };
    const handler_close = () => {
        setModal(null);
    };

    return [modal, handler_open, handler_close]
}