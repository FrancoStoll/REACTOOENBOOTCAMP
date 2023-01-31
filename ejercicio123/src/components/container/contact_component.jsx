import React from 'react';
import { CONTACT } from '../../models/contact.class';
import { STATE } from '../../models/contact.state';
import Contacto from '../pure/contacto';


const ContactComponent = () => {
    const defaultContact = new CONTACT ('Enrique','Mela','enri@correo.com',STATE.conected);
    
    return (
        <div>
             <div>
                 <h1>Tus contactos</h1>
            </div>        
                <Contacto contact={defaultContact}></Contacto>
            
        </div>
    );
};





export default ContactComponent;
