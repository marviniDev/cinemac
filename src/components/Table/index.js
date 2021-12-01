import { Div } from './style';
import React from "react";

function Table({dataUser, setButtonClickDeleteModal, onClick}) {
  const data = dataUser.rows? dataUser.rows : {}
  const keys =  Object.keys(data).length > 0? Object.keys(data[0]) : {}
  const users = dataUser.rows? data : {}

    const handleButtonClick = (params) =>{
    onClick(params)
    }

  const Row = ({record}) => {
    const keys = Object.keys(record)
    return (
      <ul>
        {
          keys.map(key => <li title={`${record[key]}`} className="col1 truncate" key={`${Math.random()}`}>{key === 'id' ? '' : record[key]}</li>)
        }
        <li className="action-menu">
          {/* <button title="visulaizar" className="btn-menu" action="view" data-id="">
            <i className="material-icons">visibility</i>
          </button> */}
          <button title="editar" className="btn-menu" action="edit" data-id="">
            <i className="material-icons">edit</i>
          </button>
          <button title="deletar" className="btn-menu delete" action="delete" data-id={`${record.id}`} onClick={()=>{setButtonClickDeleteModal(!true);handleButtonClick({id:record.id, nome:record.NOME})}}>
            <i className="material-icons">delete</i>
          </button>
        </li>
      </ul>
    )
  }
  
  return (
    <Div className="section-table">
      <div className="table">
        <ul className="thead">
          {Object.keys(data).length > 0? keys.map(key => <li className="col1" key={key}>{key === 'id' ? '' : key}</li>) : <li style={{width:'100%', textAlign:'center',display:'block'}} >NENHUM CABEÇALHO A MOSTRA, VERIFIQUE O COMPONENTE</li>}
        </ul>
        <ul className="tbody">
          {Object.keys(data).length > 0? users.map(record => <Row key={`${Math.random()}`} record={record}></Row>) : <li style={{width:'100%', textAlign:'center',display:'block'}}> NENHUM VALOR DE CAMPO ENCONTRADO </li>}
        </ul>
      </div>
    </Div>
  );
}

export default Table;
