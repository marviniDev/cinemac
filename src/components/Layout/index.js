import React, { useState } from "react"
import Menu from "../Menu-Lateral"
import MenuTop from "../Menu-Top"
import Footer from "../Footer"
import { Container, FlexContent, Main } from "./style"
// import Loading from "../Loading";

function Layout({ children }) {
  const pathArray = window.location.pathname.split('/')
  if (pathArray[2]) {
    const str = pathArray[2]
    var capitalized = str[0].toUpperCase() + str.substr(1)
  }

  const [refenceTitlePage, setRefenceTitlePage] = useState(capitalized ? capitalized : "Dashboard")

  return (
    <>
      <Container className="Layout">
          <MenuTop title={`${refenceTitlePage}`} className="MenuTop" />
          <FlexContent>
          <Menu {...{ setRefenceTitlePage }} className="Menu" />
          <Main className="MainPrincipal">
            <div style={{ minHeight: '100%', position: 'relative', overflow: 'hidden', flex: 'none', boxShadow: '0px 0px 30px 0px rgb(0 0 0 / 25%)', borderRadius: ' 0.3125em' }}>
              {children}
            <Footer />
            </div>
          </Main>
          </FlexContent>
      </Container>
    </>
  )
}

export default Layout
