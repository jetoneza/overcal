import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div>
    <h1>Overtime Calculator App</h1>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    <br />
    <Link to='/projects' activeClassName={classes.activeRoute}>
      Projects
    </Link>
  </div>
)

export default Header
