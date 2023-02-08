import React, { Component } from "react";
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <h1>{totalCounters}</h1>
      </a>
    </nav>
  );
};

export default NavBar;
