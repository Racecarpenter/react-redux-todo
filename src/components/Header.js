import React from 'react'

const Header = (props) => {
  return (
    <nav>
    <div className="nav-wrapper orange">
      <a className="brand-logo">Todo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="collapsible.html">GitHub Repo</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Header
