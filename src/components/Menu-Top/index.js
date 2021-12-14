import { Avatar } from "primereact/avatar";
import { useContext, useState } from "react";
import { Redirect } from "react-router";
import AuthProvider from "../../contexts/auth";
import DarkMode from "../Darkmode";
import LogoApp from "../Logo";
import { ContainerAvatar, Details, TopBar } from "./style";

function MenuTop({ isMenuActive, setMenuActive }) {
  const { user, ExitToApp } = useContext(AuthProvider);
  const [exit, setExit] = useState(false);
  const [isClicked, setClicked] = useState(false);

  function exitAplication() {
    setExit(ExitToApp());
  }

  return (
    <TopBar>
      <LogoApp {...{ isMenuActive }} {...{ setMenuActive }} />
      <div style={{ display: "flex" }}>
        <DarkMode></DarkMode>
        <ContainerAvatar
          onClick={() => {
            setClicked(!isClicked);
          }}
        >
          <Avatar
            label={user?.name?.substring(0, 1)}
            style={{
              background: "#0383C4",
              color: "#fff",
              borderRadius: "50%",
            }}
            className="p-mr-2"
            size="large"
            shape="circle"
          />
          <i className="pi pi-angle-down p-mr-2"></i>

          <Details className="datails" isClicked={isClicked}>
            <ul>
              <li onClick={exitAplication}>
                <i className="pi pi-power-off p-mr-2"></i> Sair
              </li>
            </ul>
          </Details>
        </ContainerAvatar>
      </div>
      {exit ? <Redirect to="/login" /> : null}
    </TopBar>
  );
}

export default MenuTop;
