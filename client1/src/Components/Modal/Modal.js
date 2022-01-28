import { useEffect } from "react";
import ModalForm from "./ModalForm";
import "./modal.css";

const Modal = ({ visible = false, title = "", onClose }) => {

    const onKeydown = ({ key }) => {
        switch (key) {
            case "Escape":
                onClose();
                break;
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", onKeydown);
        return () => document.removeEventListener("keydown", onKeydown);
    });

    if (!visible) return null;

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">{title}</h3>
                    <span className="modal-close" onClick={onClose}>
                        &times;
                    </span>
                </div>
                <div className="modal-body">
                    <ModalForm />
                </div>
            </div>
        </div>
    );
};

export default Modal;
