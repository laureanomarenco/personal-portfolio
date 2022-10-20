import "../App.css";
import data from "../data.json";
import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { SlPlus, SlClose } from "react-icons/sl";

export default function Contact() {
  const leng = useSelector((state) => state.lenguage);

  const [showContact, setShowContact] = useState(false);
  const [mail, setMail] = useState({});

  function handleChange(e) {
    setMail({
      ...mail,
      [e.target.name]: e.target.value,
    });
  }

  async function sendMail(e) {
    e.preventDefault();
    const mailSend = await axios.post('https://personal-back-production.up.railway.app/api/mail', mail)
    console.log(mailSend.data)
    alert('Mail enviado correctamente, ¡Muchas gracias!')
  }

  return (
    <>
      {!showContact ? (
        <div className="flex-container" onClick={() => setShowContact(true)}>
          <h1 className="title">{data[leng].contact}</h1>
          <SlPlus className="button-hidden" />
        </div>
      ) : (
        <>
          <div
            className="flex-container active-section"
            onClick={() => setShowContact(false)}
          >
            <h1 className="title">{data[leng].contact}</h1>
            <SlClose className="button-hidden" />
          </div>
          <div className="body-container">
            <div className="container-one">
              <p className="text-contact">{data[leng].contactText}</p>
              <div className="flex-container-row">
                <p className="text">laureanomarenco@gmail.com</p>
                <a href='https://www.linkedin.com/in/laureano-marenco/' className="text">Linkedin</a>
                <a href='https://github.com/laureanomarenco' className="text">GitHub</a>
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
                <textarea name="text" onChange={handleChange} className='input-text'></textarea>
                <button type="submit" className="button">{data[leng].send}</button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
