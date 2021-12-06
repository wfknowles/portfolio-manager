import React from 'react';
import { Nav } from 'react-bootstrap';

function NavItem({name, text, href, click, active}) {

    const isActive = () => {
        return name === active ? true : false;
    }

    const setItemClass = () => {
        const baseClass = "menu menu-item";
        return isActive() ? `${baseClass} active` : baseClass;
    }

    return (
      <Nav.Link href={href} className={setItemClass} onClick={()=> click(name)}>{text}</Nav.Link>
    )
}

export default NavItem;