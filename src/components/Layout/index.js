import { useState } from "react";
import Menu from "../Menu-Lateral";
import MenuTop from "../Menu-Top";
import { Container, FlexContent, Main } from "./style";
// import Loading from "../Loading";

function Layout({ children }) {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <>
      <Container className="Layout">
        <MenuTop
          {...{ isMenuActive }}
          {...{ setMenuActive }}
          className="MenuTop"
        />
        <FlexContent>
          <Menu {...{ isMenuActive }} {...{ setMenuActive }} className="Menu" />
          <Main className="MainPrincipal">
            <div
              style={{
                minHeight: "100%",
                position: "relative",
                overflow: "hidden",
                flex: "none",
                boxShadow: "0px 0px 30px 0px rgb(0 0 0 / 25%)",
                borderRadius: " 0.3125em",
              }}
            >
              {children}
            </div>
          </Main>
        </FlexContent>
      </Container>
    </>
  );
}

export default Layout;
