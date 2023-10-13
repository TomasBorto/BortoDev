import React from 'react';
import './Footer.css';
import { FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa6';
import { TbFileCv } from 'react-icons/tb';
import CV from './assets/CV.pdf';
import Logo from './assets/Logo-tb-removebg-preview.png';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer>
        <div className='footer-info'>
          <img src={Logo} alt="" />
        </div>
        <div className='footer-list'>
          <div className='footer-title'>
            <h3 className='footer-h3'>Servicios</h3>
            <div  className='separador'></div>
          </div>
          <ul>
            <li>Diseño Web</li>
            <li>Backend</li>
            <li>Mantenimiento</li>
            <li>Deploy Web</li>
          </ul>
        </div>
        <div className='footer-list'>
          <div className='footer-title'>
            <h3 className='footer-h3'>Links</h3>
            <div  className='separador'></div>
          </div>
          <ul>
            <li><Link className='footer-link' to='/' >Home</Link></li>
            <li><Link className='footer-link' to='/proyectos' >Proyectos</Link></li>
            <li><Link className='footer-link' to='/servicios' >Servicios</Link></li>
            <li><Link className='footer-link' to='/about' >Acerca de mi</Link></li>
          </ul>
        </div>
        <div className='footer-contact'>
          <div className='footer-title'>
            <h3 className='footer-h3'>Contacto</h3>
            <div  className='separador'></div>
          </div>
          <div className='personal-data'>
            <p><span><FaPhone /></span>(+54) 9 11 5420 1465</p>
            <p><span><FaEnvelope /></span>bptomy2@gmail.com</p>
          </div>
          <div className="footer-personal-buttons">
            <a className="footer-personal-button" target="_blank" href="https://www.linkedin.com/in/tomas-bortoluzzi-padin-1b7a1a215/"><span><FaLinkedin /></span></a>
            <a className="footer-personal-button" target="_blank" href={CV} download><span><TbFileCv /></span></a>
          </div>
        </div>
    </footer>
  )
}

export default Footer