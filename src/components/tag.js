import React from "react";
import '../styles/Tag_styles.css';


import PropTypes from 'prop-types';



function Tag(props) {


        return (


                  
                <div className="tag_div">
                      
                    <h5 className="tag_title">{props.title}</h5>
                          
                </div>
                          

          );
        };
    
Tag.prototype = {

  title: PropTypes.string,

}

export default Tag