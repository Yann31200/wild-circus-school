import React from 'react';
import MenuTopNav from './MenuTopNav';
import logo from './assets/logo.jpeg';
import './topNavBar.css';

function TopNavBar() {
  return (
    <div className="top-nav-bar">
      <img src={logo} alt="logo" className="logo" />
      <h1 className="title-nav">Wild Circus School </h1>
      <div className="menu-top-nav" ><MenuTopNav /></div>
    </div>
  );
}

export default TopNavBar;