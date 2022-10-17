import React, { useState } from "react";
import data from "../data.json";
import { useSelector } from "react-redux";
import { SlPlus, SlClose } from "react-icons/sl";

export default function Projects() {
  const leng = useSelector((state) => state.lenguage);

  const [showProjects, setShowProjects] = useState(false);
  return (
    <>
      {!showProjects ? (
        <div className="flex-container" onClick={() => setShowProjects(true)}>
          <h1 className="title">{data[leng].projects}</h1>
          <SlPlus className="button-hidden" />
        </div>
      ) : (
        <>
          <div
            className="flex-container active-section"
            onClick={() => setShowProjects(false)}
          >
            <h1 className="title">{data[leng].projects}</h1>
            <SlClose className="button-hidden" />
          </div>
          {data[leng].projectsList.map((p) => {
            return (
              <div className="project-container">
                <div className="container-one">
                  <h3 className="text-gray">
                    {p.title}
                    <span className="text">{p.date}</span>
                  </h3>
                  <p className="text">{p.description}</p>
                  <ul>
                    {p.items.map(i => {
                      return (
                        <li className="text">{i}</li>
                      )
                    })}
                  </ul>
                </div>
                <div className="container-two">
                  <a href={p.link}>
                    <img
                      className="project-image"
                      src={p.image}
                      alt="project"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
