import React from 'react';
import { FaSass, FaReact, FaCss3, FaHtml5, FaJs, FaBootstrap } from 'react-icons/fa6';
import { SiSolidity, SiTailwindcss, SiNodedotjs, SiMongodb, SiTypescript, SiMysql, SiNextdotjs, SiNestjs } from 'react-icons/si';

export const SkillsData = [
    {
        type:'Frontend',
        list:[
            {
                nombre:'Html5',
                icon: <FaHtml5 />,
                style:'html'
            },
            {
                nombre:'Css3',
                icon: <FaCss3 />,
                style:'css'
            },
            {
                nombre:'Javascript',
                icon: <FaJs />,
                style:'js'
            },
            {
                nombre:'React',
                icon: <FaReact />,
                style:'react'
            },
            {
                nombre:'Next',
                icon: <SiNextdotjs />,
                style:'next'
            },
            {
                nombre:'Bootstrap',
                icon: <FaBootstrap />,
                style:'boot'
            },
            {
                nombre:'Sass',
                icon: <FaSass />,
                style:'sass'
            },
            {
                nombre:'Tailwind',
                icon: <SiTailwindcss />,
                style:'tail'
            },
            {
                nombre:'Typescript',
                icon: <SiTypescript />,
                style:'type'
            }
        ]
    },
    {
        type:'Backend',
        list:[
            {
                nombre:'NodeJS',
                icon: <SiNodedotjs />,
                style:'node'
            },
            {
                nombre:'MongoDB',
                icon: <SiMongodb />,
                style:'mongodb'
            },
            {
                nombre:'NestJS',
                icon: <SiNestjs />,
                style:'nest'
            },
            {
                nombre:'MySql',
                icon: <SiMysql />,
                style:'sql'
            }
        ]
    },
    {
        type:'Web3',
        list:[
            {
                nombre:'Solidity',
                icon: <SiSolidity />,
                style:'solidity'
            }
        ]
    }
]