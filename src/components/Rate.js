import '../styles/rate_styles.css'




function rate(props) {

    console.log(props.rating)



    function createElements(n, className_star){
            var elements = [];
            for (let i = 0; i < n; i++) {
                elements.push(<span key={i} className={className_star}>star</span>);
            }
            return elements;
    }
    
    const className_star_red =  'material-icons_rate_red'  ;
    const className_star_grey = 'material-icons_rate_grey'; 
        
    let rate_star_red = createElements(props.rating, className_star_red)
    let rate_star_grey = createElements(5, className_star_grey)

    return (
        <div id='rate_div'>
            <div id='rate_red'>

            {rate_star_red}

        </div>

        <div id='rate_grey'>
            {rate_star_grey}
        </div>

      
        </div>
    )

}

export default rate