import React, { Component } from 'react';
import { Menuitems } from ".'/Menuitems"
import { MenuItems } from './MenuItems';
class Navbar extends Component {
    render() {
        return(
<nav className="NavbarItems"> 
    <h1 className="navbar-logo">React</h1>
    <div className="menu-icon">
        
    </div>
    <ul>
        {MenuItems.map((item, index) => {
            return (
        
        
        <li>
            <a className={item.cName} href={item.url}>
            {item.title}
            </a>
            </li>
        )
            })}
    </ul>
</nav>
        )
    }
}
export default Navbar