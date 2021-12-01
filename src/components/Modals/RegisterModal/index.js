import React, { useState } from "react"
import { ModalModal} from "./style"
import axios from 'axios'
import Header from "./components/Header"
import Tabs from "./components/Tabs"
import FormRegister from "./components/FormRegister"

function Modal({setButtonClickToOpenModal, className}){

  const [active, setActive] = useState(0)

  const [state, setState] = useState()
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setState({
      [name]: value
    });
    
    console.log(state)
  }

  const handleSubmit = (event) => {
    console.log(state)
  }

  return(
    <>
      <ModalModal className={`${className}`}>
        <Header {...{setButtonClickToOpenModal}}/>
        <Tabs {...{active, setActive}}/>
        <FormRegister active={active} {...{handleInputChange}}/>
      </ModalModal>
    </>
  )
}

export default Modal