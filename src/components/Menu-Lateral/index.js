import React, { useEffect, useState } from "react";
import { MenuDiv, TitleMenu } from "./style";
import DarkMode from "../Darkmode";
import { NavLink } from "react-router-dom";
import MovieIcon from '@mui/icons-material/Movie';

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
        <NavLink to="/app/filmes">
          <li><MovieIcon/>Filmes</li>
        </NavLink>
        <NavLink to="/app/sessoes">
          <li><Icon>LocalMovies</Icon>Sessões</li>
        </NavLink>
        <NavLink to="/app/salas">
          <li><Icon>MeetingRoom</Icon>Salas</li>
        </NavLink>
      </ul>
    )
  }

  return (
    <MenuDiv>
      <TitleMenu>Menu Principal</TitleMenu>
      <ItemMenu></ItemMenu>
     <div className={`menu-footer ${isActive ? "" : "active"}`}>
        <div
          className="mf-header"
          onClick={() => {
            setActive(!isActive);
          }}
        >
          <div className="mf-header-left">
            <i className="pi pi-pallete" style={{'fontSize': '1em'}}></i>
            <p>Configurações</p>
          </div>
          <i className="pi pi-chevron-down" style={{'fontSize': '1em'}}></i>
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
                  <i className="pi pi-pallete" style={{'fontSize': '1em'}}></i>
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
