import '../App.css';
import React from 'react';
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function NavBar() {
  return (
    <div className='nav-background'>
        <div className='nav-container-name'>
            <h1>LAUREANO MARENCO</h1>
            <h3 className='decoration'>FULL STACK WEB DEVELOPER</h3>
            <h5 className='decoration'>Rosario, Argentina</h5>
            <a  href='mailto:laureanomarenco@gmail.com' className='no-deco'>
                <AiOutlineMail className='icon'/>
            </a>
            <a  href='https://github.com/laureanomarenco'>
                <AiFillGithub className='icon'/>
            </a>
            <a  href='https://www.linkedin.com/in/laureano-marenco/'>
                <AiFillLinkedin className='icon'/>
            </a>
        </div>
    <img className='photo' src="https://res.cloudinary.com/dg7ssgadn/image/upload/v1665847714/fotoCV2_aymut9.png" alt="Laureano" />
    </div>
  ) 
}
