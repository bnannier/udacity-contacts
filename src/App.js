import React, { Component } from 'react';
import ListContacts from './ListContacts'
import ListContactsStateless from './ListContactsStateless'

class App extends Component {
    state = {
        contacts: [
            {
                "id": "ryan",
                "name": "Ryan Florence",
                "email": "ryan@reacttraining.com",
                "avatarURL": "http://localhost:5001/ryan.jpg"
            },
            {
                "id": "michael",
                "name": "Michael Jackson",
                "email": "michael@reacttraining.com",
                "avatarURL": "http://localhost:5001/michael.jpg"
            },
            {
                "id": "tyler",
                "name": "Tyler McGinnis",
                "email": "tyler@reacttraining.com",
                "avatarURL": "http://localhost:5001/tyler.jpg"
            }
        ]
    }

    removeContact = (contact) => {
        this.setState((state) => ({
            contacts: state.contacts.filter((c) => c.id !== contact.id)
        }))
    }

    render() {
        return (
            <div>
                <div>3.3: Stateless functional component</div>
                <ListContactsStateless onDeleteContact={this.removeContact} contacts={this.state.contacts} />
                <br />
                <div>3.4: Stateful component</div>
                <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts} />
                <br />
            </div>
        )
    }
}

export default App;
