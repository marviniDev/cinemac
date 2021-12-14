import { NavLink } from "react-router-dom";
import { ReactComponent as SvgMovie } from "../../assets/icons/movie.svg";
import { ReactComponent as SvgRoom } from "../../assets/icons/room.svg";
import { ReactComponent as SvgTheaters } from "../../assets/icons/theaters.svg";
import LogoApp from "../Logo";
import {
  Container,
  LogoMobile,
  MenuContainer,
  MenuDiv,
  SvgMenu,
  TitleMenu,
} from "./style";

function Menu({ isMenuActive, setMenuActive }) {

  const ItemMenu = () => {
    return (
      <ul className="menu-body">
        <NavLink to="/app/filmes">
          <li>
            <SvgMenu>
              <SvgMovie />
            </SvgMenu>
            Filmes
          </li>
        </NavLink>
        <NavLink to="/app/sessoes">
          <li>
            <SvgMenu>
              <SvgTheaters />
            </SvgMenu>
            Sessões
          </li>
        </NavLink>
        <NavLink to="/app/salas">
          <li>
            <SvgMenu>
              <SvgRoom />
            </SvgMenu>
            Salas
          </li>
        </NavLink>
      </ul>
    );
  };

  return (
    <Container isMenuActive={isMenuActive}>
      <MenuContainer isMenuActive={isMenuActive}>
        <MenuDiv isMenuActive={isMenuActive}>
          <LogoMobile>
            <LogoApp {...{ isMenuActive }} {...{ setMenuActive }} />
          </LogoMobile>
          <TitleMenu>Menu Principal</TitleMenu>
          <ItemMenu></ItemMenu>
        </MenuDiv>
      </MenuContainer>
    </Container>
  );
}

export default Menu;
