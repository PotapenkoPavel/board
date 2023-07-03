import React from "react"
import { Route, Routes } from "react-router-dom"

import { MainPage, NotFoundPage } from "@/pages"

import { Default } from "@/layouts"


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route index element={<MainPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Router