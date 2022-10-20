import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
/*Pages*/ 
import Home from './pages/Home'
import A_PROPOS from './pages/A_Propos'
import FicheLogement from './pages/Fiche-Logement'
import Error from './pages/404'


const container = document.getElementById('root');
const root = createRoot(container)
    root.render(
        <React.StrictMode>
            <Router>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/a-propos/" element={<A_PROPOS />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/fiche-logement/:idLogement" element={<FicheLogement/>}/>
                </Routes>

        </Router>
        </React.StrictMode>,
)
