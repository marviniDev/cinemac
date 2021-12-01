import React from "react";
import { Div } from "./style"

function Avatar({children}){
  return(
    <Div className="avatar">
      <h4>{children}</h4>
    </Div>
  )
}

export default Avatar;