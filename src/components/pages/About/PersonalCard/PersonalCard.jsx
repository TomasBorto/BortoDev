import React from "react";
import './PersonalCard.css';
import FotoPersona from '../../../../images/Foto_perfil.png'
import { FaLinkedin } from 'react-icons/fa6';
import { TbFileCv } from 'react-icons/tb';
import CV from './CV.pdf';

export default function PersonalCard(){
    return(
        <section className="cards-about">
            <div className="card-about">
              <div className="card-content-about">
                <div className="imagen__persona">
                  <img src={FotoPersona} alt="" />
                </div>
                <div className="texto-about">
                  <h2>Tomas Bortoluzzi</h2>
                  <h4>Desarrollador Full Stack</h4>
                  <p>Soy programador full stack con certificado en Coderhouse, miobjetivo es crecer en el area del desarrollo web aprendiendonuevas tecnologias y reforzando mis conocimientos actuales.</p>
                  <div className="personal-buttons">
                    <a className="personal-button" target="_blank" href="https://www.linkedin.com/in/tomas-bortoluzzi-padin-1b7a1a215/"><span><FaLinkedin /></span></a>
                    <a className="personal-button" target="_blank" href={CV} download><span><TbFileCv /></span></a>
                  </div>
                </div>
              </div>
            </div>
        </section>
    )
}