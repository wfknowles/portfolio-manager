import React from 'react';
import { Nav } from 'react-bootstrap';

function DashMenuItem({name, text, current, click}) {

    const isCurrent = () => {
        return name === current ? true : false;
    }

    const setMenuClass = () => {
        const baseClass = "menu menu-item";
        return isCurrent() ? `${baseClass} active` : baseClass;
    }

    const menuClass = setMenuClass();

    return (
      <Nav.Link className={menuClass} onClick={()=> click(name)}>{text}</Nav.Link>
    )
}

export default DashMenuItem;