import React from 'react';
import {render} from 'react-dom';
import ContactsList from './ContactsList';

let contacts = {
    name: "Scott",
    phone: "555 555 1111"
}

class App extends React.Component {
    render(){
        return (
                <div>
                    <h1>Contacts List</h1>
                    <ContactsList contacts={this.props.contacts} />
                </div>
        )
    }
}

render(<App  contacts={contacts}/>, document.getElementById('app'));