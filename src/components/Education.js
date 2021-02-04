import React from 'react';

class Education extends React.Component {
 state = {
    titre : 'Formations ',
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
                <h1 className="titre"> {this.state.titre}</h1>
               {this.state.education.map(formation=>{
                    return (
                        <article className='course'>
                        <div className='title'>
                            <h4>{formation.titre} </h4>
                            <span className='year'>{formation.year}</span>
                        </div>
                        <div className="descrition">
                            <h4>{formation.etablissement} </h4>
                            <p>{formation.descrition}</p>
                        </div>
                     </article>
                    )
                })}
               
            </div>
        )

    }
}
export default Education;