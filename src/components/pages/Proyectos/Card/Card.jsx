import { FaReact, FaCss3, FaHtml5, FaBootstrap } from 'react-icons/fa6';
import SanaSana from '../assets/sanasana.png';
import React from 'react';
import './Card.css';

export default function Card({ proyecto }) {
    return(
        <div className="card">
            <div className="card-content">
              <img src={proyecto.ph} alt="" />
              <div className="divProDiv">
                <h3 className="proSubtitle"> {proyecto.nombre} </h3>
                <ul className="proList">
                    <b className="proList-bold">Made With:</b>
                    {/* <li className="proList-item html"><FaHtml5 /> </li>
                    <li className="proList-item css"><FaCss3 /></li>
                    <li className="proList-item boot"><FaBootstrap /></li> */}
                    {proyecto.madeWith.map((iconos) => {

                    const iconClassName = "proList-item " + iconos.iconClass;

                      return(
                        
                        <li title={iconos.title} className={iconClassName}>{iconos.icon}</li>
                      )
                    })}
                </ul>
                <p className="proPar">{proyecto.texto}</p>
                <div className="btnDiv">
                    <a target="_blank" href={proyecto.linkSitio}><button className="proBtn proBtn--dark">Link</button></a> 
                    <a target="_blank" href={proyecto.linkRepo}><button className="proBtn proBtn--light">Repositorio</button></a>
                </div>
            </div>
            </div>
        </div>
    )
}