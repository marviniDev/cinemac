import React, { useEffect, useState } from "react";
import { MenuDiv } from "./style";
import Avatar from "./components/Avatar";
import Title from "../Title";
import DarkMode from "../Darkmode";
import { Link } from "react-router-dom";

function Menu({setRefenceTitlePage}) {
  const [themeColor, setThemeColor] = useState(sessionStorage.getItem("color") ? sessionStorage.getItem("color") : "#6271ff");
  const [isActive, setActive] = useState(true);
  const [clicked, setClicked] = useState(sessionStorage.getItem("itemSelected") ? sessionStorage.getItem("itemSelected") : 0)

  useEffect(()=>{
    <ItemMenu/>
  },[clicked]);

  function setColorTheme(color) {
    sessionStorage.setItem("color", color);
    window.location.reload();
  }

  const handleClick = e => {
    const index = parseInt(e.target.id, 0)
    const title = e.target.title;
    if (index !== clicked) {
      setClicked(index)
      sessionStorage.setItem("itemSelected",index)
      setRefenceTitlePage(title)
    }
  }

  const ItemMenu = () => {
    return(
      <ul className="menu-body">
        <li onClick={handleClick} className={`item-menu ${parseInt(clicked) === 0? "active":""}`} id={0} title={"Promissórias"}>
          <i className="material-icons">widgets</i>Promissórias
        </li>
        <li onClick={handleClick} className={`item-menu ${parseInt(clicked) === 1? "active":""}`} id={1} title={"Emissão de recibos"}>
          <i className="material-icons">playlist_play</i>Emissão de recibos
        </li>
        <Link to="/dashboard">
          <li onClick={handleClick} className={`item-menu ${parseInt(clicked) === 2? "active":""}`} id={2} title={"Transferência de veículo"}>
            <i className="material-icons">transfer_within_a_station</i>Transferência de veículo
          </li>
        </Link>
          <li onClick={handleClick} className={`item-menu ${parseInt(clicked) === 3? "active":""}`} id={3} title={"Fases da Transferência"}>
            <i className="material-icons">view_week</i>Fases da Transferência
          </li>
        <Link to="/dashboard/veiculos">
          <li onClick={handleClick} className={`item-menu ${parseInt(clicked) === 4? "active":""}`} id={4} title={"Veículo"}>
            <i className="material-icons">drive_eta</i>Veículos
          </li>
        </Link>
        <Link to="/dashboard/clientes">
          <li onClick={handleClick} className={`item-menu ${parseInt(clicked) === 5? "active":""}`} id={5} title={"Clientes"}>
            <i className="material-icons">people</i>Clientes
          </li>
        </Link>
        <li onClick={handleClick} className={`item-menu ${parseInt(clicked) === 6? "active":""}`} id={6} title={"Fornecedor"}>
          <i className="material-icons">supervisor_account</i>Fornecedor
        </li>
        <li onClick={handleClick} className={`item-menu ${parseInt(clicked) === 7? "active":""}`} id={7} title={"Usuários"}>
          <i className="material-icons">person_pin</i>Usuários
        </li>
      </ul>
    )
  }

  return (
    <MenuDiv>
      <div className="menu-header">
        <Avatar>
          <Title title="M"></Title>
        </Avatar>
        <div className="info">
          <p className="userName">Objetive Ti</p>
          <p className="userEmail">developer@objetiveti.com.br</p>
        </div>
      </div>
      <div className="title">
        <span>Menu Principal</span>
      </div>
      <ItemMenu></ItemMenu>
     <div className={`menu-footer ${isActive ? "" : "active"}`}>
        <div
          className="mf-header"
          onClick={() => {
            setActive(!isActive);
          }}
        >
          <div className="mf-header-left">
            <i className="material-icons">color_lens</i>
            <p>Configurações</p>
          </div>
          <i className="material-icons dropdown">keyboard_arrow_down</i>
        </div>
        <div className="mf-body upper">
          <div className="row">
            <div className="tab">
              <p>tema</p>
              <div className="escolha-tema">
                <label htmlFor="inputColorTheme" className="icon-tema">
                  <span className="icon-tcolor">
                    <input
                      id="inputColorTheme"
                      className="inputColorTheme"
                      type="color"
                      defaultValue={themeColor}
                      onChange={(event) => {
                        setThemeColor(event.target.value);
                      }}
                    />
                  </span>
                  <span className="icon-tcolor"></span>
                  <span className="icon-tcolor"></span>
                </label>
                <button
                  className="salvar-cor"
                  onClick={() => {
                    setColorTheme(themeColor);
                  }}
                >
                  <i className="material-icons">save</i>
                  <p>Salvar alterações</p>
                </button>
              </div>
            </div>
            <div className="modo-escuro">
              <p>modo escuro</p>
              <DarkMode></DarkMode>
            </div>
          </div>
        </div>
      </div>
    </MenuDiv>
  );
}

export default Menu;
