import React from 'react'
import Link from 'next/link'
const Nav = () => {
  return (
    <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
    <div className="container">
        <Link href='/'className="navbar-brand js-scroll" ><img src="../images/logo-ai.png" width="45px" /></Link>
     
      <button className="navbar-toggler collapsed" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href='/'className="nav-link js-scroll active">Home</Link>
          </li>
          <li className="nav-item">
            <Link href='/about'className="nav-link js-scroll ">About</Link>

          </li>
          <li className="nav-item">
            <Link href='/blog'className="nav-link js-scroll ">Blogs</Link>

          </li>
          <li className="nav-item"> 
            <Link href='/contact'className="nav-link js-scroll ">Contact</Link>

          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  )
}

export default Nav