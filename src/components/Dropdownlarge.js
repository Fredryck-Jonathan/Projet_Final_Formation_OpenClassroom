import React, { useEffect, useState } from "react";
import '../styles/Dropdownlarge_styles.css';
import { useLocation } from "react-router-dom"

import PropTypes from 'prop-types';






function Dropdownlarge(props) {

    const [isActive, setIsActive] = useState(false);
    let location = useLocation();

    useEffect(() => {
    
   
        for (let accordion of document.getElementsByClassName('accordion')) {
            location.pathname === '/a-propos' ? accordion.className = 'accordion-about' : accordion.className = 'accordion-details';
        }
    })


    return (
        


            <div className="accordion">
                <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                    <h5>{props.title}</h5>
                    <div>{isActive ? <span className="material-icons_expand">expand_less</span> : <span className="material-icons_expand">expand_more</span>}</div>
                </div>
        
                {isActive && <div className="accordion-content">
                    <p>{props.content}</p>
                </div>}
        
            </div>



    )
        

    


}

Dropdownlarge.propTypes = {

    title: PropTypes.string,
    content: PropTypes.string,
    


}


export default Dropdownlarge
