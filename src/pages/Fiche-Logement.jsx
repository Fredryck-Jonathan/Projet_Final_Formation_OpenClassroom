import Header from '../components/Header';
import Footer from '../components/Footer';
import Dropdownlarge from '../components/Dropdownlarge';
import { stockData } from "../data.js";
import {useParams} from "react-router-dom";

function Logement() {


    let { id } = useParams();

    console.log(id)

    return (
        <div id='page' >
            <div id='header'>
                <Header/>
            </div>

            <div id='body'>
                <div className='carrousel_div'></div>

                <div id='section_accordion'>
                    <Dropdownlarge></Dropdownlarge>

                </div>

            </div>

            <div id='footer'>
                <Footer/>
            </div>
        </div>
    )
}

export default Logement