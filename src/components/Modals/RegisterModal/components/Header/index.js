import React from "react";

function Header({setButtonClickToOpenModal}) {
    return(
        <div className="modal-header">
            <h4>Exemplo Title</h4>
            <div className="modal-header-buttons">
                <button onClick={()=>{setButtonClickToOpenModal(true)}}>
                    <p>CANCELAR</p>
                    <i className="material-icons">clear</i>
                </button>
                <button form="form-register">
                    <p>CONFIRMAR</p>
                    <i className="material-icons">check</i>
                </button>
            </div>
        </div>
    )
}

export default Header;