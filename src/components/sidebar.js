import React from "react";
import { stack as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu width={ 130 } >
      <a className="menu-item" href="/">NewsDeck</a>

      <a className="menu-item" href="search">Search</a>

      <a className="menu-item--small" href="logout">Logout</a>

    </Menu>
  );
};