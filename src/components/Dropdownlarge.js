import React, { useEffect, useState } from "react";
import '../styles/Dropdownlarge_styles.css';
import { useLocation } from "react-router-dom"

import PropTypes from 'prop-types';






function Dropdownlarge(props) {

    const [isActive, setIsActive] = useState(false);
    let location = useLocation();

    useEffect(() => {
    
        const accordion = document.getElementsByClassName('accordion-item')[0]
        location.pathname === '/a-propos' ? accordion.style.width = '86%' : accordion.style.width = '48%'
    
    })


    return (
        
        < div className="accordion" >

            <div className="accordion-item">
                <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                    <h5>{props.title}</h5>
                    <div>{isActive ? '-' : '+'}</div>
                </div>
        
                {isActive && <div className="accordion-content">
                    <p>{props.content}</p>
                </div>}
        
            </div>
        </div >


    )
        

    


}

Dropdownlarge.prototype = {

    title: PropTypes.string,
    content: PropTypes.string,
    


}


export default Dropdownlarge
