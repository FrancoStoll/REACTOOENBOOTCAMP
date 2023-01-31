import React from 'react';
import { STATE } from "../../models/contact.state";
import PropTypes from 'prop-types';
const Contacto = ({contact}) => {
    return (
        <div>
            <h2>
                Nombre: {contact.name}
            </h2>
            <h3>
                Apellido: {contact.surname}
            </h3>
            <h4>
                eMail: {contact.eMail}
            </h4>
            <h5>
                estado: {contact.ESTATUS ? STATE.conected : STATE.disconected}
            </h5>
        </div>
    );
};


Contacto.propTypes = {
    contact: PropTypes.instanceOf(STATE)
};


export default Contacto;
