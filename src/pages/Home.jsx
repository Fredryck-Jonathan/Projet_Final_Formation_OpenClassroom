/*Style(s)*/
import '../styles/Home_styles.css'

/*Composant*/ 
import Thumb from '../components/Thumb'

/*ajout de react*/
import React from "react";

/*ajout du tableau de la base de données */
import { stockData } from "../data/Kasa.js";


function Home() {
    return (

        <div id='page' >


            <section id='sectionPresentation'>

                <h4 id='texte_sectionPresentation'>Chez vous, partout et ailleurs</h4>
                
                <div id='img_section'>

                    <div id='img_mask'></div>
                    <div id='img_url'></div>
                    <div id='img_background'></div>

                </div>

            </section>

            <div id='gallery'>

                {stockData.map((card) => (

                <Thumb id={card.id} title={card.title} cover={card.cover} description={card.description} key={card.id}  />

                ))}

            </div>


        </div>
    )
}

console.log('Home')

export default Home