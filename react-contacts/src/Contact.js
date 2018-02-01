import React from 'react';
import {render} from 'react-dom';

const Contact = ({contact}) =>
                <li>{contact.name} {contact.phone}  </li>
export default Contact;