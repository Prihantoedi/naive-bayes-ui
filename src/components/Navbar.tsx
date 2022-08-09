import React from 'react'
import { Link } from 'react-router-dom';   
function Navbar() {

  const pressed = () => {
    console.log("pressed");
  }

  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="nav ">
            <li className="nav-item">
                {/* <Link to="/about">About</Link> */}
                {/* <a type="button" onClick={pressed}>Login</a> */}
                <button type="button" className="btn-login" data-bs-toggle="modal" data-bs-target="#loginModal">
                  Login
                </button>
            
            </li>

            <li className="nav-item">
                <button type="button" className="btn-login" data-bs-toggle="modal" data-bs-target="#loginModal">
                  Register
                </button>
            
            </li>
            
            <li className="nav-item">
                
            </li>

            </ul>

            
        </div>
        </div>
    </nav>
  )
}

export default Navbar