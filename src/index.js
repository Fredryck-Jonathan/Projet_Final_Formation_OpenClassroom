import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './styles/index_styles.css';
import App from './App'

import Header from './components/Header'
import Footer from './components/Footer'


const container = document.getElementById('root');
const root = createRoot(container)
    root.render(
        <React.StrictMode>
            <Router>
                <Header/>
                <App/>
                <Footer/>
            </Router>
        </React.StrictMode>,
)
