
/*ajout du style css*/
import '../styles/A_Propos_styles.css'

/* ajout du composant*/
import Dropdownlarge from '../components/Dropdownlarge'

/*ajout du tableau d'objet de la base de données*/
import { aboutData} from "../data/about.js"

function A_Propos() {
    return (
        <div id='page' >


            <div id='body_propos'>

                <section id='section_Propos'>
                    <div id='img_mask_propos'></div>
                    <div id='img_url_propos'></div>
                    <div id='img_background_propos'></div>
                </section>

                <div id='dropdown_gallery'>

                    {aboutData.map((about) => (

                        <Dropdownlarge title={about.title} content={about.content} key={about.title}></Dropdownlarge>

                    ))}
                </div>
            </div>

        </div>
    )
}


export default A_Propos