import './ItemService.css';
import React from 'react';

export function ItemService({icon, title, text}) {
    return(
        <div className='item'>
            <span>{icon}</span>
            <div className='text-item'>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

export function ItemServiceNoLine({icon, title, text}) {
    return(
        <div className='item-noline'>
            <span>{icon}</span>
            <div className='text-item'>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}