import React from 'react'
import { useRoutes } from 'react-router-dom';
/*Pages*/ 
import Home from './pages/Home'
import A_PROPOS from './pages/A_Propos'
import FicheLogement from './pages/Fiche-Logement'
import Error from './pages/404'





const App = () => {
    let routes = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/a-propos/',
            element: <A_PROPOS />,
        },
        {
            path: '/fiche-logement/:id/',
            element: <FicheLogement />
        },
        {
            path: '*',
            element: <Error />,
        }
      
    ]);
    return routes;
    
}

export default App


    