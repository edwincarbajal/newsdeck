import React from "react";
import { stack as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu width={ 100 } >
      <a className="menu-item" href="/">1</a>

      <a className="menu-item" href="/">2</a>

      <a className="menu-item" href="/">3</a>

      <a className="menu-item" href="/">4</a>
    </Menu>
  );
};