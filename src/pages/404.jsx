import { Link } from 'react-router-dom'


import '../styles/404_styles.css'

function Erreur() {
    return (
        <div id='page' >


            <div id='body_404'>
                <h3>404</h3>
                <h5>Oups! La page que vous demandez n'existe pas.</h5>
                <Link id='link_404' to="/">Retourner sur la page d'accueil</Link>

            </div>

        </div>
    )
}

console.log('Error')

export default Erreur