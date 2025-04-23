import {useEffect, useRef} from "react";

export  default function ModalHelper({isVisible, onClose, onCancel, children}) {

    const dialogRef = useRef(null);

    useEffect(() => {
        isVisible ? dialogRef.current.showModal() : dialogRef.current.close();
    }, [isVisible]);

    return (
        <dialog
            className="modal"
            onClose={onClose}
            onCancel={onCancel}
            ref={dialogRef}
        >
            { isVisible && children }
        </dialog>
    )

}