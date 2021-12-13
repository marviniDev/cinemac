import { Avatar } from "primereact/avatar";
import Logo from "../../assets/img/icon-cinemac-square56px.jpg";
import { Flex, Icon } from "./style";

function LogoApp({ isMenuActive, setMenuActive }) {
  return (
    <Flex>
      <Icon
        isMenuActive={isMenuActive}
        className="pi pi-bars p-mr-2"
        onClick={() => {
          setMenuActive(!isMenuActive);
        }}
      ></Icon>
      <Avatar className="p-overlay-badge" image={Logo} size="large" />
      <h1>Cinemac</h1>
    </Flex>
  );
}

export default LogoApp;
