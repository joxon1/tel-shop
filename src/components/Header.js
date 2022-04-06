import { useState } from "react";
import SidebarDate from "./Sidebar";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";
import "../style/Header.css";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="header">
          <a href="#" className="menu-bars">
            <FaIcons.FaBars onClick={() => setSidebar(!sidebar)} />
          </a>
          <h1 className="logo">-TelShop-</h1>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <a href="#" className="menu-bars">
                <AiIcons.AiOutlineClose onClick={() => setSidebar(!sidebar)} />
              </a>
            </li>
            {SidebarDate.map((item, index) => (
              <li key={index} className={item.cName}>
                <a href="#">
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
