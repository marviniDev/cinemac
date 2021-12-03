import React from "react"
import { Route, Redirect} from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../contexts/auth"

function PrivateRoutes({ component: Component, layout: Layout, ...rest }) {
  const { signed } = useContext(AuthContext)
  
  return (
      <Route
        {...rest}
        render={() =>
          signed ?
          Layout ? (
            <Layout>
              <Component />
            </Layout>
          ) : (
            <Component />
          )
          :
          <Redirect to="/login"/>
        }
      />
  )
}

export default PrivateRoutes
