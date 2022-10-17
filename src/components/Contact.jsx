import "../App.css";
import data from "../data.json";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SlPlus, SlClose } from "react-icons/sl";

export default function Contact() {
  const leng = useSelector((state) => state.lenguage);

  const [showContact, setShowContact] = useState(false);
  // const [mail, setMail] = useState({});

  // const dispatch = useDispatch();

  // function handleChange(e) {
  //   setMail({
  //     ...mail,
  //     [e.target.name]: e.target.value,
  //   });
  // }

  // function sendMail(e) {
  //   e.preventDefault();
  //   dispatch(sendMail(mail));
  // }

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
            </div>
            <div className="container-two">
              <div className="flex-container-row">
                <p className="text">laureanomarenco@gmail.com</p>
                <a href='https://www.linkedin.com/in/laureano-marenco/' className="text">Linkedin</a>
                <a href='https://github.com/laureanomarenco' className="text">GitHub</a>
              </div>
              {/* <form onSubmit={sendMail} className="flex-container-row">
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  placeholder={data[leng].placeholderMail}
                />
                <textarea name="text" onChange={handleChange}></textarea>
                <button type="submit">{data[leng].send}</button>
              </form> */}
            </div>
          </div>
        </>
      )}
    </>
  );
}
