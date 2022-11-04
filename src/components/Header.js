/*Import des libraries utiliser*/

import { NavLink} from "react-router-dom"

/*Import des styles externes*/
import '../styles/Header_styles.css';




function Header() {


    return (
        <div className='header'>

            <div className='logo'>

                <img id="logo" src="logo.png" alt="logo"/>

            </div>


            <nav>
                <NavLink className="NavLink" to="/" end="/" style={({ isActive }) => ({ 
                            textDecoration: isActive ? 'underline' : 'none' })} >Accueil</NavLink>
            
                <NavLink className="NavLink" to="/a-propos" end="/a-propos" style={({ isActive }) => ({ 
                            textDecoration: isActive ? 'underline' : 'none' })} >A Propos</NavLink>
            </nav>
            
        </div>
    )
}

export default Header