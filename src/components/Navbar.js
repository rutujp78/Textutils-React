import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
// import { mode } from '../App'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">

    

      <Link className="navbar-brand" to="/">{props.title}</Link>

      

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/">{props.aboutText}</a> */}
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
            {/* a=>link and href=>to */}
          </li>

        </ul>
          {/* <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
            <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
            <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
            <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
            <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
            <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
          </div> */}

          {/* <li> */}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            {/* <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault" /> */}
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label> */}
            </div>
          {/* </li> */}



      </div>

    </div>
    
  </nav>
  )
}

Navbar.prototype = {
    title: PropTypes.string,
    aboutText: PropTypes.string.isRequired 
}

Navbar.defaultProps= {
    title: 'Set title here',
    aboutText: 'About'
}