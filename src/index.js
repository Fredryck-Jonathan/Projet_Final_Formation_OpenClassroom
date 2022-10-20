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
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/a-propos/" exact element={<A_PROPOS/>} />
                    <Route path="/fiche-logement/:id" exact element={<FicheLogement/>} />
                    <Route path="*" exact element={<Error/>} />
                </Routes>

        </Router>
        </React.StrictMode>,
)
