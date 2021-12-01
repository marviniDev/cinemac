import React, { useState } from "react";

function Tabs({active,setActive}) {
    const handleClick = e => {
        const index = parseInt(e.target.id, 0)
        if (index !== active) {
          setActive(index)
        }
      }

    return(
        <ul className="tabs">
            <li onClick={handleClick} className={`${active === 0? "active":""}`} id={0}>CADASTRO</li>
            <li onClick={handleClick} className={`${active === 1? "active":""}`} id={1}>ENDEREÇO</li>
            <li onClick={handleClick} className={`${active === 2? "active":""}`} id={2}>CONTATO</li>
            {/* <ul className="tabs clearfix" >
                <li className={`${active === 0? "active":""}`} onClick={handleClick} id={0}>
                exemplo
                </li>
                <li className={`${active === 1? "active":""}`} onClick={handleClick} id={1}> 
                exemplo
                </li>
                <li className={`${active === 2? "active":""}`} onClick={handleClick} id={2}> 
                exemplo
                </li>
            </ul> */}
        </ul>
    )
}

export default Tabs;