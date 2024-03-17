import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className='h-20 w-full bg-transparent flex justify-between px-14 fixed'>
            {/* <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7913380/weather-icon-md.png" alt="" className=' w-20 h-20'/> */}
            <div className="nav2 align-middle flex gap-9 mt-6 text-white font-bold text-2xl ">
                <Link to="">Home</Link>
                <Link to="/weather">Weather</Link>
            </div>
        </nav>
      </div>
    )
  }
}
