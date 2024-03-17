import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

export default class Root extends Component {
  render() {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    )
  }
}
