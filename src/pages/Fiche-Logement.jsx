
/**ajout des composants */
import { Carousel, CarouselItem } from "../components/Carousel"
import Rate from "../components/Rate"
import Dropdownlarge from '../components/Dropdownlarge';
import Tag from '../components/Tag';


/**ajout du tableau de la base de données */
import { stockData } from "../data/Kasa.js";

/*Ajout de use params*/
import { useParams } from "react-router-dom";

/* ajout du style css*/
import '../styles/fiche_logement_styles.css';



function Logement() {

    let { id } = useParams();
    

    function foundDetails(urlID) {

        return urlID.id === id;
    };

    let data_id = stockData.find(foundDetails)

    console.log()

    function equipement() {

        let equipements = ""
        for (const element of data_id.equipments) {
        
            equipements = equipements + element + "\n"
            

        }
        return equipements
    }



    let equipement_item = equipement()
    console.log(equipement_item, data_id.equipments, data_id.pictures)
    

    return (
        <div id='page' >


            <div id='body_fiche_logement'>
                <div className='carrousel_div'>
                    <Carousel>
                        {data_id.pictures.map((picture) => (

                            <CarouselItem picture={picture} key={picture} />

                            

                        ))}
                    </Carousel>

                </div>

                <div id='deuxieme_section'>
                    <div id='flex_left'>
                        <div id='flex_left_text'>
                            <h6>{data_id.title}</h6>
                            <p>{data_id.location}</p>
                        </div>
                        <div id='tags'>
                        {data_id.tags.map((tag) => (

                            <Tag key={tag} title={tag}  />
    
                        ))}

                        </div>
                        
                        
                    </div>
                    <div id='flex_right'>
                        <div id='info_auteur'>
                            <h6>{data_id.host.name}</h6>
                            <img src={data_id.host.picture} alt="auteur de l'annonce" />
                        </div>
                        <div id='rate'>

                                <Rate rating={data_id.rating}></Rate>

                        </div>

                    </div>

                </div>
  
                
                <div id='section_accordion'>
                    <Dropdownlarge title='Description' content={data_id.description}></Dropdownlarge>
                    <Dropdownlarge title ='Equipements' content={equipement_item }></Dropdownlarge>

                </div>

            </div>

        </div>
    )
}

export default Logement