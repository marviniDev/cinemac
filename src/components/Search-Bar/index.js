import React, { useState } from "react";
import { Div } from "./style";

function SearchBar({setButtonClickToOpenModal, txtButton, onClick}) {
  const [text, setText] = useState('')
  const handleInputChange = (e) =>{
    const value = e.target.value
    setText(value)
    console.log(text);
  }

  const handleButtonClick = () =>{
    onClick(text)
  }

  return (
    <>
    <Div>
      <div className="fild">
        <input type="search" placeholder="Pesquisar" onChange={handleInputChange}/>
        <button onClick={handleButtonClick}>
          <i className="material-icons">search</i>
        </button>
      </div>
      <div className="button">
        <button onClick={()=>{
          setButtonClickToOpenModal(!true)
        }}>
          <span>{txtButton}</span>
          <i className="material-icons">add</i>
        </button>
      </div>
    </Div>
    </>
  );
}

export default SearchBar;
