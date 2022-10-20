import React, { useState, useEffect } from "react";
import '../styles/Dropdownlarge_styles.css'

import PropTypes from 'prop-types';





function Dropdownlarge(props) {
    
    let [DropdownLargeState_Open, setDropdownLargeState] = useState(true)

    let toggleDropdownlarge = () => {

        setDropdownLargeState(DropdownLargeState_Open === true ? false : true)

    }
    



    return (
        
        <div className="dropdown">

            
            <div onClick={() => toggleDropdownlarge()}  className="dropdown_close">
                <h5 className="title_dropdown">{props.title}</h5>
                <svg  id="icon_dropdown" width="18" height="16" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M1.3705 0.761357L0.0120851 2.13059L7.61002 9.73828L15.208 2.1229L13.8495 0.761357L7.61002 7.0152L1.3705 0.761357V0.761357Z" fill="white"/>
                </svg>
            </div>

                <div className="dropdown_open hide" >
                    <p>{props.text}</p>
                </div>



        </div>

    )
        

    


}

Dropdownlarge.prototype = {

    title: PropTypes.string,
    text: PropTypes.string,
    


}


export default Dropdownlarge
