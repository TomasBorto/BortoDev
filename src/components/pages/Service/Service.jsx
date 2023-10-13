import './Service.css';
import React from 'react';
import { GeneralButton } from '../../Buttons/GeneralButton';
import {ItemService, ItemServiceNoLine} from './serviceList/ItemService';
import { MdDesignServices } from 'react-icons/md';
import { FaDatabase } from 'react-icons/fa6';
import { GiAutoRepair } from 'react-icons/gi';
import { TbWorldWww } from 'react-icons/tb';

export default function Service(){
    return(
        <section className='servicios'>
            <div className='my-service'>
                <h1>Mis servicios</h1>
                <p>Desarrollo desde del diseño del front-end de un sitio web hasta el backend y el deploy del mismo.</p>
                <GeneralButton
                link={'/about'}
                name={'Contactame'}
                />
            </div>
            <div className='services'>
                <ItemService 
                 title={'Diseño Web'}
                 text={'Desarrollo de paginas con los mejores frameworks de Javascript.'} 
                 icon={<MdDesignServices />}
                />
                <ItemService 
                 title={'Backend'}
                 text={'Desarrollo de utilidades en los siitos webs a través de base de datos y servidores'} 
                 icon={<FaDatabase />}
                />
                <ItemService 
                 title={'Mantenimiento'}
                 text={'Mantenimiento del sitio web tanto del lado del front-end como del backend.'} 
                 icon={<GiAutoRepair />}
                />
                <ItemServiceNoLine 
                 title={'Deploy del Sitio Web'}
                 text={'Deploy del sitio web y del servidor creado en un dominio nuevo o en alguno ya existente.'} 
                 icon={<TbWorldWww />}
                />
            </div>
        </section>
    )
}