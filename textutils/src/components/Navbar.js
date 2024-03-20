import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.about_text}</a>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
  )
}

// keep the initial 'p' always small
Navbar.propTypes = {title: PropTypes.string.isRequired,
                    about_text: PropTypes.string.isRequired}
// we have made an object of proptypes --> just like defining datatypes of a variable
// also import Proptypes at the top
// now we can't change title and about_text datatypes
// isRequired makes the prop required to be sent from app.js file or a default prop needs to be set otherwise it will show error in console of inspect

Navbar.defaultProps = {
  title: "THE TITLE",
  about_text: "ABOUT TEXT"
}

// default props will set this value if nothing is passed in title and about_texct in app.js file as props