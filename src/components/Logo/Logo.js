import React from 'react';

import classes from './Logo.module.css';
import { Link } from 'react-router-dom';
import burgerLogo from '../../assets/images/burger-logo.png';

const Logo = () => (
  <Link to="/">
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  </Link>
);

export default Logo;