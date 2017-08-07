import React from 'react'

const Header = (props) => {
  let logs = {
    fontFamily:"monospace",
    paddingLeft: 20
  }
  return (
    <nav>
    <div className="nav-wrapper green">
      <a className="brand-logo" style={logs}>Todo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="https://github.com/Racecarpenter/react-redux-todo" target="blank">GitHub Repo</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Header
