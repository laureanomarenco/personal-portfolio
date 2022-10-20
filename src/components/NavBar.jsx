import "../App.css";
import React from "react";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import changeLenguage from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

export default function NavBar() {
  const leng = useSelector((state) => state.lenguage);

  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch(changeLenguage(e.target.value));
  }
  return (
    <div className="nav-background">
      <div className="nav-container-name">
        <h1>LAUREANO MARENCO</h1>
        <h3 className="decoration">FULL STACK WEB DEVELOPER</h3>
        <h5 className="decoration">Rosario, Argentina</h5>
        <div className="link-container">
          <a href="mailto:laureanomarenco@gmail.com" className="no-deco">
            <AiOutlineMail className="icon" />
          </a>
          <a href="https://github.com/laureanomarenco">
            <AiFillGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/laureano-marenco/">
            <AiFillLinkedin className="icon" />
          </a>
          {leng === "eng" ? (
            <>
              <button className="eng-active" onClick={handleClick} value="eng">
                eng
              </button>
              <button className="esp" onClick={handleClick} value="esp">
                esp
              </button>
            </>
          ) : (
            <>
              <button className="eng" onClick={handleClick} value="eng">
                eng
              </button>
              <button className="esp-active" onClick={handleClick} value="esp">
                esp
              </button>
            </>
          )}
        </div>
      </div>
      <img
        className="photo"
        src="https://res.cloudinary.com/dg7ssgadn/image/upload/v1665847714/fotoCV2_aymut9.png"
        alt="Laureano"
      />
    </div>
  );
}
