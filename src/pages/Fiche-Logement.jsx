import Header from '../components/Header'
import Footer from '../components/Footer'
import Dropdownlarge from '../components/Dropdownlarge'

function Logement() {
    return (
        <div id='page' >
            <div id='header'>
                <Header/>
            </div>

            <div id='body'>
                <Dropdownlarge></Dropdownlarge>

            </div>

            <div id='footer'>
                <Footer/>
            </div>
        </div>
    )
}

export default Logement