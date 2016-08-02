import React from 'react';
import {render} from 'react-dom';

class ContactsList extends React.Component {
    render(){
        return (
                <ul>
                    <li>Michelle 555 555 5555</li>
                    <li>Scott 512 555 5555</li>
                    <li>Ben 552 522 5555</li>
                    <li>Pri 589 111 5555</li>
                </ul>
        )
    }
}

export default ContactsList;