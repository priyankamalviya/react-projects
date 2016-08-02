import React from 'react';
import {render} from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [{
    id:1,
    name: "Scott",
    phone: "555 555 1111"
}, {
        id:2,
        name: "Courtney",
        phone: "555 200 0899"
}, {
        id:3,
        name: "Kim",
        phone: "555 273 0891"
}, {
        id:4,
        name: "John",
        phone: "100 200 0888"
    }]

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