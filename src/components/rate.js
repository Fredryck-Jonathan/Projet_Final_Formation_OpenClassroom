import '../styles/rate_styles.css'



function rate(props) {


    return (
        <div id='rate_div'>

            {props.rating.map(() => (

            <span className="material-icons_rate_red">star</span>   
                
            )


                
            
            
            )}
            

        </div>
    )

}

export default rate