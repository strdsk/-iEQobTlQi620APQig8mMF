import IndexPage from "Pages/Index"
import React, { Fragment } from "react"
import { Route } from "react-router"

export default function Routes() {
  // TODO: change route to regular objects and implement it's processor :/
  return (
    <Fragment>
      <Route exact path="/" children={<IndexPage/>} />
      <Route path="/dasar-hukum" children={<></>} />
      <Route path="/informasi">
        <Route path="/informasi/berkala">hello</Route>
        <Route path="/informasi/serta-merta">hello</Route>
        <Route path="/informasi/setiap-saat">hello</Route>
      </Route>
    </Fragment>
  )
}