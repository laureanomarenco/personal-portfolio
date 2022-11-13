import "../App.css";
import data from "../data.json";
import axios from "axios";
import Swal from "sweetalert2";
import React, { useState } from "react";
import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillEye,
} from "react-icons/ai";
import changeLenguage from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { SlPlus, SlClose } from "react-icons/sl";
//import { SiReact, SiExpress, SiSequelize, SiAngular, SiJava, SiPostgresql } from "react-icons/si";

export default function Home() {
  const leng = useSelector((state) => state.lenguage);

  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(true);

  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch(changeLenguage(e.target.value));
  }

  const [mail, setMail] = useState({});

  function handleChange(e) {
    setMail({
      ...mail,
      [e.target.name]: e.target.value,
    });
  }

  async function sendMail(e) {
    e.preventDefault();
    const mailSend = await axios.post(
      "https://personal-back-production.up.railway.app/api/mail",
      mail
    );
    console.log(mailSend.data);
  }

  const showAlert = () => {
    Swal.fire({
      title: "Gracias!",
      text: "Tu mail fue enviado correctamente",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };
  return (
    <>
      <div className="home-background" id="land">
        <div className="nav-container-name">
          <h1 className="title-land">LAUREANO MARENCO</h1>
          <h3 className="decoration">FULL STACK WEB DEVELOPER</h3>
          <h5 className="decoration">Rosario, Argentina</h5>
          <p>{data[leng].description}</p>
          <div className="link-container">
            <a href="mailto:laureanomarenco@gmail.com" className="no-deco">
              <AiOutlineMail className="icon" />
            </a>
            <a href="https://github.com/laureanomarenco" target='_blank'>
              <AiFillGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/laureano-marenco/" target='_blank'>
              <AiFillLinkedin className="icon" />
            </a>
            {leng === "eng" ? (
              <>
                <button
                  className="eng-active"
                  onClick={handleClick}
                  value="eng"
                >
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
                <button
                  className="esp-active"
                  onClick={handleClick}
                  value="esp"
                >
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
      {/* INFO ------------------------------------------------------------------------- */}
      {!showAbout ? (
        <div className="flex-container" onClick={() => setShowAbout(true)}>
          <h1 className="title">INFO</h1>
          <SlPlus className="button-hidden" />
        </div>
      ) : (
        <>
          <div
            id="info"
            className="flex-container active-section"
            onClick={() => setShowAbout(false)}
          >
            <h1 className="title">INFO</h1>
            <SlClose className="button-hidden" />
          </div>
          <div className="body-container">
            <div className="container-one">
              <div className="section">
                <h2 className="sub-title">{data[leng].about}</h2>
                <p className="text">{data[leng].about1}</p>
                <p className="text">{data[leng].about2}</p>
                <p className="text">{data[leng].about3}</p>
              </div>
              <div className="section">
                <h2 className="sub-title">{data[leng].experience}</h2>
                {data[leng].experienceList.map((e) => {
                  return (
                    <>
                      <p className="text-gray">{e.title}</p>
                      <p className="text">
                        {e.date} <br /> {e.description}
                      </p>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="container-two">
              <div className="section">
                <h2 className="sub-title">{data[leng].competencies}</h2>
                <h3 className="sub-title">HARD-SKILLS</h3>
                <ul className="list">
                  <li className="item">JavaScript, TypeScript, Java</li>
                  <li className="item">React, Redux, NodeJS, Angular, Next</li>
                  <li className="item">CSS, Tailwind, Bootstrap, SweetAlert</li>
                  <li className="item">Express, PostgreSQL, Sequelize, MongoDB, Mongoose</li>
                  <li className="item">OAuth, JWT, Passport</li>
                  <li className="item">Stripe, Nodemailer, Web-Push</li>
                  <li className="item">
                    CI/CD, GitHub Actions, Scrum, Testing, TDD
                  </li>
                </ul>
                <h3 className="sub-title">SOFT-SKILLS</h3>
                <ul className="list">
                  <li className="item">{data[leng].softSkills}</li>
                </ul>
                <h3 className="sub-title">{data[leng].lenguages}</h3>
                <ul className="list">
                  <li className="item">{data[leng].idiom1}</li>
                  <li className="item">{data[leng].idiom2}</li>
                </ul>
              </div>
              <div className="section">
                <h2 className="sub-title">{data[leng].other}</h2>
                <p className="text">{data[leng].otherDescription}</p>
              </div>
            </div>
          </div>
        </>
      )}
      {/* PROJECTS ------------------------------------------------------------------------- */}
      {!showProjects ? (
        <div className="flex-container" onClick={() => setShowProjects(true)}>
          <h1 className="title">{data[leng].projects}</h1>
          <SlPlus className="button-hidden" />
        </div>
      ) : (
        <>
          <div
            className="flex-container active-section"
            id="projects"
            onClick={() => setShowProjects(false)}
          >
            <h1 className="title">{data[leng].projects}</h1>
            <SlClose className="button-hidden" />
          </div>
          <div className="project-container">
            {data[leng].projectsList.map((p) => {
              return (
                <div className="section">
                  <h3 className="text-gray">
                    {p.title}
                    <span className="text">{p.date}</span>
                  </h3>
                  <p className="text">{p.description}</p>
                  <ul className="list">
                    {p.items.map((i) => {
                      return <li className="text">{i}</li>;
                    })}
                    <a href={p.link} target='_blank'>
                      <AiFillEye className="icon"></AiFillEye>
                    </a>
                    <a href={p.github} target='_blank'>
                      <AiFillGithub className="icon"></AiFillGithub>
                    </a>
                  </ul>
                  <a href={p.link}>
                    <img
                      className="project-image"
                      src={p.image}
                      alt="project"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </>
      )}
      <div className="flex-container active-section" id="contact">
        <h1 className="title">{data[leng].contact}</h1>
      </div>
      <div className="body-container">
        <div className="container-one">
          <p className="text-contact">{data[leng].contactText}</p>
          <div className="flex-container-row">
            <p className="text">laureanomarenco@gmail.com</p>
            <div className="container-links">

            <a href="https://github.com/laureanomarenco" target='_blank'>
              <AiFillGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/laureano-marenco/" target='_blank'>
              <AiFillLinkedin className="icon" />
            </a>
            </div>
          </div>
        </div>
        <div className="container-two">
          <form onSubmit={sendMail} className="flex-container-row">
            <input
              type="text"
              name="email"
              className="input-mail"
              onChange={handleChange}
              placeholder={data[leng].placeholderMail}
            />
            <textarea
              name="text"
              onChange={handleChange}
              className="input-text"
            ></textarea>
            <button type="submit" className="button" onClick={showAlert}>
              {data[leng].send}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
