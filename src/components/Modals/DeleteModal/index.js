import React, { useState } from 'react'
import api from '../../../services'
import { ModalDel } from './style'
import ReactLoading from 'react-loading';

function DeleteModal ({onClick, className, numberId}){
  const [valueInput, setValueInput] = useState('')
  const handleInputChange = (e) =>{
    const value = e.target.value
    setValueInput(value)
  }

  function handleButtonClick(a) {
    onClick(a)
  }

  const [buttonLoading,setButtonLoading] = useState({
    className: '',
    text: 'Delete'
  })

  const deleteUSer = () => {
    if (numberId.id > 0 && valueInput === "Delete") {
      setButtonLoading({
        text:<ReactLoading type={'spin'} color={'var(--cor-principal)'} width={'50%'} height={'0px'}/>
      })
      const params = {
        status: false,
      }
      try {
        api.delete(`user/${numberId.id}`, {params}).then(res => {
          if (res.status === 200) {
            setButtonLoading({
              className: 'btn-sucess',
              text: 'Sucess'
            })
            setTimeout(() => {
              handleButtonClick(true)
              setValueInput('')
              setButtonLoading({
                className: '',
                text: 'Delete'
              })
            }, 500);
          }
        })
      } catch (error) {
        console.log("A OPERAÇÃO FALHOU!");
      }
    }
  }

  return (
    <ModalDel>
    <div style={{display:`${className === 'fade'? 'block' : 'block' }`}} className={`modal ${className}`} id="genericDeleteModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>{handleButtonClick(true); setValueInput("")}}><span aria-hidden="true">×</span></button>
          <h4 className="modal-title" id="exampleModalLabel">Are you sure?</h4>
        </div>
        <div className="modal-body">
          <p>Você está prestes a excluir <span className="entityType bg-danger deleteDialogEntityType">{numberId.nome}</span> e todo o seu conteúdo.
            <span > Esta operação é permanente e não pode ser desfeita.</span>
          </p>
  
          <form className="form-inline text-center">
            <div className="form-group">
              <label>Escreva "Delete" para confirmar</label>
              <input type="text" 
              className="form-control" 
              id="deleteConfirmText" 
              autoComplete="off" 
              value={`${valueInput}`} 
              onChange={handleInputChange}/>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal" onClick={()=>{handleButtonClick(true); setValueInput("")}}>Cancel</button>
          <button type="button" id="confirmDeleteButton" className={`btn btn-danger ${buttonLoading.className === 'btn-sucess'? 'btn-sucess':''}`} onClick={deleteUSer}>
            {buttonLoading.text}
          </button>
        </div>
      </div>
    </div>
  </div>
  </ModalDel>
    )
}

export default DeleteModal