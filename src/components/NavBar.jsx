import "../App.css";
import React from "react";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import changeLenguage from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import n from './NavBar.module.css'

export default function NavBar() {
  const leng = useSelector((state) => state.lenguage);

  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch(changeLenguage(e.target.value));
  }
  return (
    <>
      <div className={n.navContainer}>
        <a href='#' className={n.logoLink}>L</a>
        <div>
        <a className={n.navLink} href='#info'>Info</a>
        <a className={n.navLink} href='#projects'>Projects</a>
        <a className={n.navLink} href='#contact'>Contact</a>
        </div>
      </div>
    </>
  );
}
