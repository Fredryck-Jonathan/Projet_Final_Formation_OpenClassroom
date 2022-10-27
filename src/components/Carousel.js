import React, { useState } from "react"
import PropTypes from 'prop-types';

import '../styles/Carousel_styles.css'

export function CarouselItem(props ,{ children }) {
    
console.log(props.picture)
    return (

        <div className='carousel-item' key={props.picture} style={{ width: '100%', backgroundImage: `url(${props.picture})` }}> 
            {children}
        </div>


    )
}


export function Carousel({ children }) {

    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex)
  
    }

    let count = React.Children.count(children);


    return (
        <div className="carousel">
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" })
                })}
            </div>


            {count > 1 && 
            <>
                <div className="indicators">
                    <span onClick={() => {
                        updateIndex(activeIndex - 1);
                    }} className="material-icons_carousel">
                        chevron_left
                    </span>

                    <span onClick={() => {
                    updateIndex(activeIndex + 1);
                        }}className="material-icons_carousel">
                    chevron_right
                    </span>
                </div>
                
                <div className="number_carousel">
                    <span>{activeIndex + 1}/ { count}</span>

                </div>
            </>
            }
        </div>
            
    )


}


CarouselItem.prototype = {


    picture: PropTypes.string,
  
  
  }