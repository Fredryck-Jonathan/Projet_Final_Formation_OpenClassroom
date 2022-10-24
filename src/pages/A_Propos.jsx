import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/A_Propos_styles.css'
import Dropdownlarge from '../components/Dropdownlarge'

import { aboutData} from "../data/about.js"

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

                    {aboutData.map((about) => (

                        <Dropdownlarge title={about.title} content={about.content} key={about.title}></Dropdownlarge>

                    ))}
                </div>
            </div>

            <div id='footer'>
                <Footer/>
            </div>
        </div>
    )
}


export default A_Propos