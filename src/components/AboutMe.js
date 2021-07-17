import React from 'react';
import photo from "..//image/hala.jpg"
import { Link } from 'react-router-dom';



class AboutMe extends React.Component{
    state={
        name : 'Hala Chaimae Oukhira',
        adress : 'Kamilia - Meknes,Maroc',
        phone : '+212674006008',
        email : 'h.oukhira@outlook.com',
        age : '24ans',
        linkIn:'www.linkedin.com/in/ hala-chaimaeoukhira-3b9881101',
        apropos:'Passionné par l’informatique, j’apprécie particulièrement découvrir et maîtriser de nouvelles technologies pour réaliser mes projets et trouver des solutions innovantes.',
        
    }
    render() {
        return (
            <section className="about">
            <div className="row">
               <div className="three columns">
                  <img className="img"  src={photo} alt="Tim Baker Profile Pic" />
               </div>
               <div className="nine columns main-col">
                   
                  <div className="row">
                    <h2>{this.state.name}</h2>
                    <div className="columns contact-details">
                        <h2>About Me</h2>
                        <p>{this.state.apropos}</p>
                        </div></div>
                     <div className="columns contact-details">
                   
                        <h2>Contact Details</h2>
                        <p className="address">
                                 <span><i>Adresse :     </i><i>{this.state.adress} </i></span><br />
                                 <span><i>Phone   :     </i>{this.state.phone}</span><br />
                                 <span><i>email   :     </i>{this.state.email}</span><br />
                                 <span></span><br />
                        </p>
                     </div>
                  </div>
               </div>
            
      
         </section>
        )
    }

}

export default AboutMe;
