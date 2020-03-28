import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        1
      </a>

      <a className="menu-item" href="/">
        2
      </a>

      <a className="menu-item" href="/">
        3
      </a>

      <a className="menu-item" href="/">
        4
      </a>
    </Menu>
  );
};