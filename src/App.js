import React, { Component } from 'react';
import ListContacts from './ListContacts'
import ListContactsStateless from './ListContactsStateless'
import * as ContactsAPI from './utils/ContactsAPI'


class App extends Component {
    state = {
        contacts: []
    }
    componentDidMount() {
        ContactsAPI.getAll().then((contacts) => {
            this.setState({ contacts })
        })
    }
    removeContact = (contact) => {
        this.setState((state) => ({
            contacts: state.contacts.filter((c) => c.id !== contact.id)
        }))

        ContactsAPI.remove(contact)
    }
    render() {
        return (
            <div>
                <br /><br /><br />
                <div>3.3: Stateless functional component</div>
                <ListContactsStateless onDeleteContact={this.removeContact} contacts={this.state.contacts} />
                <div>3.4: Stateful component</div>
                <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts} />
                <br />
            </div>
        )
    }
}

export default App;
