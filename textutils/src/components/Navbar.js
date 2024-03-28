import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    // <nav className={"navbar navbar-expand-lg navbar-dark bg-body-tertiary">
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      {/* navbar-dark makes the text color white and background color dark*/}
      {/* we apply backticks to use TEMPLATE LITERALS (they provide more advantages than strings)*/}
      {/* we'll write this nav className using JavaScript */}
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>

            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/">{props.about_text}</a> */}
              <Link className="nav-link" to="/About">{props.about_text}</Link> 

            </li>

          </ul>
          <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
            <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
            <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
            <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>

          </div>
          {/* <div className="form-check form-switch text-light"> */}
          <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark' : 'light'}Mode</label> */}
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Toggle Mode</label>

          </div>
        </div>
      </div>
    </nav>
  )
}

// keep the initial 'p' always small
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about_text: PropTypes.string.isRequired
}
// we have made an object of proptypes --> just like defining datatypes of a variable
// also import Proptypes at the top
// now we can't change title and about_text datatypes
// isRequired makes the prop required to be sent from app.js file or a default prop needs to be set otherwise it will show error in console of inspect

Navbar.defaultProps = {
  title: "THE TITLE",
  about_text: "ABOUT TEXT"
}

// default props will set this value if nothing is passed in title and about_texct in app.js file as props