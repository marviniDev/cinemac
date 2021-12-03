import React from "react";
import { TopBar, Flex, Icon } from "./style";
import { Link } from "react-router-dom";
import { Avatar } from "primereact/avatar";
import { Menubar } from 'primereact/menubar';
import Logo from "../../assets/img/icon-square-blue.jpg"
import { useContext } from "react";
import AuthProvider from "../../contexts/auth"

function MenuTop(props) {

  const { user, ExitToApp } = useContext(AuthProvider)

  console.log(user, "oi");

  const items = [
    {
      label: <Avatar label={user?.name?.substring(0, 1)} style={{ background: '#0383C4', color: '#fff' }} className="p-mr-2" size="large" shape="circle" />,
      items: [
        {
          label: 'Sair',
          icon: 'pi pi-fw pi-power-off',
          url: ExitToApp()
        }
      ]
    },

  ];

  // const start = <Avatar label={user?.name.substring(0,3)} className="p-mr-2" size="small" shape="circle" />;

  return (
    <TopBar>
      <Flex>
        <Icon className="pi pi-bars p-mr-2"></Icon>
        <Avatar className="p-overlay-badge" image={Logo} size="large" />
        <h1>Cinemac</h1>
      </Flex>
      <Menubar model={items} start={""} end={""} />
    </TopBar>
  );
}

export default MenuTop;
