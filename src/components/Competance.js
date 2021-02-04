import React from 'react';

class Competance extends React.Component {
 state = {
    titre : 'Competances ',
    education : [
        {titre : ' 1er année du master spécialise  ', year:'12/2020 - Présent', etablissement : " Faculté de sciences Abdelmalek Essaadi , Tetouan - Maroc"
        ,descrition :'Filière: Qualité de logiciel.'},
        {titre : ' Licence Professionnel ', year:'09/2016 - 07/2017', etablissement : "Faculté de sciences Dhar El Mehraz, Fés - Maroc"
         ,descrition :'Filière: System d\'Information et Génie Logiciel, avec une mention Bien.'},
        {titre : 'DUT - Génie Informatique ', year:'09/2014 - 07/2016'
        , etablissement : "Ecole Supérieure de Technologie, Meknès - Maroc"
        ,descrition :'Filière Génie Informatique ,Option  Génie Logiciel , avec une mention Bien.'},
        {titre : 'Baccalauréat - Science expérimentale ', year:2014, etablissement : "Lycee Omar Ibn Al Khattab, Meknès - Maroc"
        ,descrition :'Option: Sciences physiques et chimiques, avec une mention Bien.'}
       ]

 }
    render() {
        return (
            <div className="containt">
                <h2 className="titre"> {this.state.titre}</h2>
                <article className='course'>
                    <ul className='skils'> 
                    <h3>Langages de programmation:</h3>

                        <li>C</li>
                        <li>C#</li>
                        <li>Java / JavaFX / j2EE</li>
                        <li>Python </li>
                        <li>Android </li>
                        <li>PHP5</li>

                    <h3>Technologie Web:</h3>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>PHP5</li>
                        <li>JavaScript</li>
                        <li>AJAX</li>
                        <li>jQuery</li>
                        <li>DOM</li>
                    <h3>Système de gestion de base de données (SGBD) :</h3>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>Oracle Database</li>
                        <li>SQLite</li>
                        <li>SQLServer</li>
                        <li>Access</li>
                    <h3>ERP:</h3>
                        <li>ODOO</li>
                        <li>Open ERP</li>

                    </ul>
    

            </article>
               
            </div>
        )

    }
}
export default Competance;