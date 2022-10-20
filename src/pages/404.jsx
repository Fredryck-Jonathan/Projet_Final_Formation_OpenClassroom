import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/404_styles.css'

function Erreur() {
    return (
        <div id='page' >
            <div id='header'>
                <Header/>
            </div>

            <div id='body_404'>
                <h3>404</h3>
                <h5>Oups! La page que vous demandez n'existe pas.</h5>
                <Link id='link_404' to="/">Retourner sur la page d'accueil</Link>

            </div>

            <div id='footer'>
                <Footer/>
            </div>
        </div>
    )
}

console.log('Error')

export default Erreur