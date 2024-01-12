import React from 'react'
import '../header/header.scss'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <Link to='/' className='header-container'>
          <img src="src\assets\img\logo-rick-et-morty.png" alt="Rick and Morty" className='logo' />
        </Link>
    </>
  )
}