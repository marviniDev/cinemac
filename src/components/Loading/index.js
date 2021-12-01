import React from "react";
import ReactLoading from 'react-loading';

function Loading() {
  return(
    <div style={{width:'100%',height:'100%',backgroundColor:'var(--cor-bg-body)',
    position:'absolute',display:'flex',justifyContent:'center',alignItems:'center',zIndex:'1'}} className="loading">
        <ReactLoading type={'bars'} color={'var(--cor-principal)'} width={'10%'} />
    </div>
  )
}

export default Loading;