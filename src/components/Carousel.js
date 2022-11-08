import React, { useState} from "react"

import '../styles/Carousel_styles.css'

const Carousel = (props) => {
    const data = props.pictures
    console.log(data)
    const [currentIndex, setCurrentIndex] = useState(0)


    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = data.length - 1;
        } else if (newIndex >= data.length) {
            newIndex = 0;
        }

        setCurrentIndex(newIndex)
  
    }

    




    
    
    
    return (
        <div className="carousel-container">
            {data.map((item, index) => {
                return <img className="carousel-item"
                    style={{ transform: `translate(-${currentIndex * 100}%)` }}
                    key={index} alt='representation habitat' src={item}></img>})

                
            }
            




            {data.length > 1 &&
                <>
                    <div className="indicators">

                        <span onClick={() => {
                            updateIndex(currentIndex - 1);
                        }} className="material-icons_carousel">
                            chevron_left
                        </span>

                        <span onClick={() => {
                            updateIndex(currentIndex + 1);
                        }} className="material-icons_carousel">
                            chevron_right
                        </span>
                    </div>
                
                    <div className="number_carousel">
                        <span>{currentIndex + 1}/ {data.length}</span>

                    </div>
                </>
            }
        </div>
    )
}

export default Carousel