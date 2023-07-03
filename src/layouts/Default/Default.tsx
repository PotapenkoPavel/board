import React from "react"
import { Outlet } from "react-router-dom"

import { Header, Sidebar } from "@components/common"

import "./Default.scss"

const Default = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="default-layout">
        <Sidebar />
        <section className='default-layout__content'>
          <Outlet />
        </section>
      </main>
    </React.Fragment>
  )
}

export default Default