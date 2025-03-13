import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../layout/Navbar'

export default function MainLayout() {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}
