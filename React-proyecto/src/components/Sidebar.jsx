import React from "react";
import {Link} from "react-router-dom";
import "../styles/sidebar.css"
//./Franquicia.html

const links = [{
    name: "Inicio",
    href: "/inicio",
    icon: "",
},{
    name: "Anime",
    href: "/anime",
    icon: "../iconos/anime.png",
},{
    name: "Tienda",
    href: "/",
    icon: "../iconos/palanca-de-mango.png",
},];

const Sidebar = ({}) => {
    return (
        <div className="sidebar">
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.href}>
                            <span className="icon" style={{ backgroundImage: `url(${link.icon})` }}></span>
                            <span className="text">{link.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;