import "../App.css";
import data from "../data.json";
import React from "react";
import { useSelector } from "react-redux";
import n from "./NavBar.module.css";

export default function NavBar() {
  const leng = useSelector((state) => state.lenguage);

  return (
    <>
      <div className="navContainer">
        <div>
          <a href="#land" className={n.logo}>
            L
          </a>
        </div>

        <div>
          <a className={n.navLink} href="#info">
            Info
          </a>
          <a className={n.navLink} href="#projects">
            {data[leng].projectsNav}
          </a>
          <a className={n.navLink} href="#contact">
            {data[leng].contactNav}
          </a>
        </div>
      </div>
    </>
  );
}
