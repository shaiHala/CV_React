import React from 'react';


class Stage extends React.Component {
    state = {
        titre : 'Stage ',
        stages : [
            {title: 'Stage de fin d\'Etude (LP)  ', year:' 04/2017-06/2017', entreprise : "Chambre de commerce et industrie, Meknès - Maroc"
            ,descrition :'Thème du projet : «Développement d’une application de gestion d\n’entreprise» (JEE).'},
            {title: 'Stage de fin d’Etude (DUT)  ', year:' 04/2016-06/2016', entreprise : "Direction Provinciale d’Equipement,Transport, et de Logistique,Meknès-Maroc"
            ,descrition :'Au sein de la Cellule informatique, thème du projet : « Élaboration d’une application pour l’intranet de la direction »(PHP). '},
            {title: 'Projet de Fin d’Etude (DUT)  ', year:' 11/2015-04/2016 ', entreprise : "-"
            ,descrition :'Projet de fin d’étude au sujet de la création d’une application de Gestion du Travail d\n’un Juge d’\nInstruction (JAVA-FX) qui a pour but de facilité sa tâche garantir une bonne organisation du travail et assurer également une sécurité optimale.'},
            {title: 'Stage d’initiation  ', year:' 07/2015-08/2015', entreprise : "La régie autonome de distribution d’Eau et d’Electricité (RADEM), Meknès - Maroc"
            ,descrition :'Au département informatique de la régie, thème du projet :«Etude de réseau informatique».'}
           ]
           


           
           
           
           
     }
    render() {
        return (
            <div className="containt">
            <h1 className="titre"> {this.state.titre}</h1>
           {this.state.stages.map(stage=>{
                return (
                    <article className='course '>
                    <div className='title'>
                       
                        <h4 >{stage.title}</h4>
                        <span className='year' >{stage.year}</span>
                    </div>
                    <div className="descrition">
                        <h4>{stage.entreprise} </h4>
                        <p>{stage.descrition} </p>
                        
                    </div>
                 </article>
                )
            })}
           
        </div>
        )

    }

}
export default Stage;