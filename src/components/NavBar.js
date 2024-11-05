import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
// import { Link, useLocation } from 'react-router-dom'

const NavBar = (props) => {
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname === '/about') {
  //     document.title = `${props.title} ~ About`;
  //   } else {
  //     document.title = `${props.title} ~ Home`;
  //   }
  // }, [location, props.title]);

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} border-bottom border-1 border-${props.mode==='dark'?'blue':'black'}}`}>
  <div className="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://cdn-icons-png.flaticon.com/128/9831/9831344.png" alt="" width="30" height="30" class="d-inline-block align-text-top"/> TextUtils
    </a>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          {/* <a className={`nav-link active  text-${props.mode==='light'?'black':'light'} nav-link-hover`} aria-current="page" href="#">Home</a> */}
        </li>
        {/* <li className="nav-item">
          <a className={`nav-link text-${props.mode==='light'?'dark':'light'} nav-link-hover`} href="#" >{props.aboutText}</a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search"> */}
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button> */}
      {/* </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'black':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
    </div>
  </div>
</nav>
<style jsx="true">{`
        .nav-link-hover {
          position: relative;
          display: inline-block;
          color: red;
          transition: color 0.3s ease;
        }
        .nav-link-hover::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 2px;
          background-color: blue;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .nav-link-hover:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </div>
  )
}
NavBar.propTypes = {title : PropTypes.string.isRequired, aboutText : PropTypes.string.isRequired}
// NavBar.defaultProps = {title : "Set title here",aboutText : "About"}
export default NavBar




