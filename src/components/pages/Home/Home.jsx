import Perfil from '../../../images/Foto_perfil.png';
import React from 'react';
import './Home.css';
import { GeneralButton } from '../../Buttons/GeneralButton';

export default function Home() {

    return(
        <section className='home'>
            <div className='perfil'>
                <img
                 src={Perfil} alt="" />
            </div>
            <div className='texto'>
                <h1>Me llamo Tomas Bortoluzzi </h1>
                <h2>Soy <span>Desarrollador Full Stack</span></h2>
                <p>Programador web Full Stack con más de un año de experiencia como freelancer. He creado sitios web para clientes desde paginas para locales hasta paginas conectadas a la blockchain.</p>
                <div className='home-buttons'>
                    <GeneralButton 
                      link={'/proyectos'}
                      name={'Proyectos'}
                    />
                    <GeneralButton 
                      link={'/about'}
                      name={'Acerca de mi'}
                    />
                </div>
            </div>
        </section>
    )
}