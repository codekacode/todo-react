import React from "react";
import ReactDOM from "react-dom";
import './modal.css'

//el componente modal sera reutilizado como un portar que podemos renderizar lo que queramos,podemos enviar formuario, alerta error 
//con children podemos enviar algun contenidochildren enviamos en el portal
function Modal({children}) {
    return ReactDOM.createPortal(
        <div className="modal">
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export {Modal}