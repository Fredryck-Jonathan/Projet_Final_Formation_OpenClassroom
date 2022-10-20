import Header from '../components/Header';
import Footer from '../components/Footer';
import Dropdownlarge from '../components/Dropdownlarge';
import { stockData } from "../data.js";
import { useParams } from "react-router-dom";
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
    console.log(equipement_item, data_id.equipments)
    

    return (
        <div id='page' >
            <div id='header'>
                <Header/>
            </div>

            <div id='body'>
                <div className='carrousel_div'></div>

  
                
                <div id='section_accordion'>
                    <Dropdownlarge title='Description' content={data_id.description}></Dropdownlarge>
                    <Dropdownlarge title ='Equipements' content={equipement_item}></Dropdownlarge>

                </div>

            </div>

            <div id='footer'>
                <Footer/>
            </div>
        </div>
    )
}

export default Logement