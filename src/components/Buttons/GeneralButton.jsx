import React from "react";
import { Link } from 'react-router-dom';
import './GeneralButton.css';

export const GeneralButton = ({link, name}) => {
    return(
        <button className="general-button">
            <Link
              className='link'
              to={link}
            >
              {name}
            </Link>
        </button>
    )
}