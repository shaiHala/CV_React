import React from 'react';


class Experience extends React.Component {
    state = {
        titre : 'Experience ',
        experience : [
            {position : ' Officier des opérations  ', year:'08/2019 - 01/2021', entreprise : " Centre financier du Qatar (QFC), Doha - QATAR"
            ,descrition :['Travail lié à l\'immigration pour toutes les entreprises agréées QFC (+1200 entreprises).',
            'Coordonner avec l\'agent d\'immigration en charge de délivrerles documents officiels.']},
            {position : 'Service Clients ', year:' 01/2019 - 07/2019', entreprise : " RKH QITARAT - Metro Doha, Doha - Qatar"
            ,descrition :['Fournir unservice clientde classemondiale.'
            ,' Assisterles clients, le chef de station lorsque le service est en mode dégradéou d\'urgence, y compris station évacuation.']},
            {position : 'Clerk', year:' 08/2017 - 08/2018', entreprise : " Carrefour Hypermarkets, Doha- Qatar"
            ,descrition :['Traitement du demande de visa, de permis de séjour et du certificat de santéau nouveau personnel.'
            ,'Coordonner entre les magasins.']},
           ]
           
            
           

           
     }
    render() {
        return (
            <div className="containt">
            <h1 className="titre"> {this.state.titre}</h1>
           {this.state.experience.map(exp=>{
                return (
                    <article className='course'>
                    <div className='title'>
                       
                        <h4 >{exp.position}</h4>
                        <span className='year' >{exp.year}</span>
                    </div>
                    <div className="descrition">
                        <h4>{exp.entreprise} </h4>
                        <p>{exp.descrition[0]}<br/>{exp.descrition[1]} </p>
                        
                    </div>
                 </article>
                )
            })}
           
        </div>
        )

    }

}
export default Experience;