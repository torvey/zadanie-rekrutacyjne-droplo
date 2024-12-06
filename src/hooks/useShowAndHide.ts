import { useCallback, useState } from "react";

export const useShowAndHide = () => {
    const [show, setShow] = useState(false);

    const display = useCallback(() => {
        setShow(true);
    }, []);

    const hide = useCallback(() => {
        setShow(false);
    }, []);

    return {
        show,
        display,
        hide,
    };
};
