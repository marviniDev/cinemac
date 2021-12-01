import React from "react"
import { Route } from "react-router-dom"

function AppRouters({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={() =>
        Layout ? (
          <Layout>
            <Component />
          </Layout>
        ) : (
          <Component />
        )
      }
    />
  )
}

export default AppRouters
