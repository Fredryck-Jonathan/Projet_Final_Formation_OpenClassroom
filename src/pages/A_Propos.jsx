import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/A_Propos_styles.css'
import Dropdownlarge from '../components/Dropdownlarge'

const text_fiabilité = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
const text_respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
const text_service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
const text_sécurité = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";


function A_Propos() {
    return (
        <div id='page' >
            <div id='header'>
                <Header/>
            </div>

            <div id='body_propos'>
                <section id='section_Propos'>
                    <div id='img_mask_propos'></div>
                    <div id='img_url_propos'></div>
                    <div id='img_background_propos'></div>
                </section>
                <div id='dropdown_gallery'>
                    <Dropdownlarge title='Fiabilité' content={text_fiabilité}></Dropdownlarge>
                    <Dropdownlarge title='Respect' content={text_respect}></Dropdownlarge>
                    <Dropdownlarge title='Service' content={text_service}></Dropdownlarge>
                    <Dropdownlarge title='Sécurité' content={text_sécurité}></Dropdownlarge>
                </div>
            </div>

            <div id='footer'>
                <Footer/>
            </div>
        </div>
    )
}


export default A_Propos