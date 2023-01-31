import { STATE } from "./contact.state";

export class CONTACT {
    name = '';
    surname = '';
    eMail = '';
    ESTATUS=true;
    states = STATE.conected;

    constructor (name, surname, eMail, states) {
        this.name = name;
        this.surname = surname;
        this.eMail = eMail;
        this.states = states
}


}