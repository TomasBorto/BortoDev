import React from "react"
import { FaSass, FaReact, FaCss3, FaHtml5, FaJs, FaBootstrap } from 'react-icons/fa6';
import { SiSolidity, SiTailwindcss, SiNodedotjs, SiMongodb, SiTypescript, SiMysql, SiNextdotjs, SiNestjs } from 'react-icons/si';
import SanaSana from './assets/sanasana.png';
import PulseMiner from './assets/PulseMiner.png';
import CPGoma from './assets/CPGoma.png';
import BortoDev from './assets/BortoDev.png';
import PromptGPT from './assets/PromptGPT.png';
import Posidonia from './assets/Posidonia.png';
import Nike from './assets/Nike.png';

export const ProyectosData = [
    {
        nombre: "Pulse Miner",
        ph: PulseMiner,
        texto: "Sitio web conectado a un contrato en la blockhain, la cual puede leer los datos del contrato como asi tambien puede ejecutar funciones del mismo. ",
        linkRepo: "https://github.com/TomasBorto/Minero",
        linkSitio: "http://pulsemines.s3-website-sa-east-1.amazonaws.com/",
        madeWith:[
            {
                icon: <FaReact />,
                iconClass: "react",
                title: "react"
            },
            {
                icon: <FaCss3 />,
                iconClass: "css",
                title: "css3"
            },
            {
                icon: <SiSolidity />,
                iconClass: "solidity",
                title: "solidity"
            }
        ]
    },
    {
        nombre: "Posidonia DAO",
        ph: Posidonia,
        texto: "Proyecto para combatir el cambio climatico con ayuda de la blockchain. Este proyecto fue presentado por el cliente en la convencion Ingenion 2023 en españa.",
        linkRepo: "https://github.com/TomasBorto/posidonia",
        linkSitio: "https://posidoniadao.com/",
        madeWith:[
            {
                icon: <FaReact />,
                iconClass: "react",
                title: "react"
            },
            {
                icon: <SiTailwindcss />,
                iconClass: "css",
                title: "css3"
            }
        ]
    },
    {
        nombre: "ChatGPT Prompts",
        ph: PromptGPT,
        texto: "Una estilo de red social donde usuarios que se esten logueados podran subir prompts usados en aplicaciones de IA y tambien pueden buscar publicaciones de otros usuarios. ",
        linkRepo: "https://github.com/TomasBorto/ChatGPTPrompts",
        linkSitio: "https://chat-gpt-prompts-zeta.vercel.app/",
        madeWith:[
            
            {
                icon: <SiTailwindcss />,
                iconClass: "tail",
                title: "Tailwind"
            },
            {
                icon: <SiNextdotjs />,
                iconClass: "next",
                title: "Next"
            },
            {
                icon: <SiMongodb />,
                iconClass: "mongodb",
                title: "MongoDB"
            }
        ]
    },
    
    {
        nombre: "Nike",
        ph: Nike,
        texto: "Clon de una parte del sitio web de Nike. ",
        linkRepo: "https://github.com/TomasBorto/Nike",
        linkSitio: "https://tomasborto.github.io/Nike/",
        madeWith:[
            {
                icon: <FaReact />,
                iconClass: "react",
                title: "react"
            },
            {
                icon: <SiTailwindcss />,
                iconClass: "css",
                title: "css3"
            }
        ]
    },
    {
        nombre: "Borto Dev",
        ph: BortoDev,
        texto: "Portafolio personal con 4 secciones: Home, Proyectos, Servicios y Acerca de mi.",
        linkRepo: "https://github.com/TomasBorto/BortoDev",
        linkSitio: "https://bortodev.com/",
        madeWith:[
            {
                icon: <FaReact />,
                iconClass: "react",
                title: "react"
            },
            {
                icon: <FaCss3 />,
                iconClass: "css",
                title: "css3"
            }
        ]
    },
    {
        nombre: "CP Goma",
        ph: CPGoma,
        texto: "Sitio web creado para un cliente con local fisico de venta de articulos varios de goma.",
        linkRepo: "https://github.com/TomasBorto/CP-Gomas",
        linkSitio: "https://cpgoma.com/",
        madeWith:[
            {
                icon: <FaReact />,
                iconClass: "react",
                title: "react"
            },
            {
                icon: <FaCss3 />,
                iconClass: "css",
                title: "css3"
            }
        ]
    },
    {
        nombre: "Sana Sana",
        ph: SanaSana,
        texto: "Bienvenidos a Sana Sana. Esta pagina fue diseñada para una clinica veterinaria en Salta, Argentina. Cuenta con 5 secciones: inicio, servicio, productos, nosotros y contacto.",
        linkRepo: "https://github.com/TomasBorto/Desafio-Clase-10",
        linkSitio: "https://tomasborto.github.io/Desafio-Clase-10/",
        madeWith:[
            {
                icon: <FaHtml5 />,
                iconClass: "html",
                title:"html5"
            },
            {
                icon: <FaCss3 />,
                iconClass: "css",
                title:"css3"
            },
            {
                icon: <FaSass />,
                iconClass: "sass",
                title:"sass"
            },
            {
                icon: <FaBootstrap />,
                iconClass: "boot",
                title:"bootstrap"
            }
        ]
    }
]