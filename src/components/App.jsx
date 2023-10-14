import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForma } from './ContactForma/ContactForma.jsx';
import { Filter } from './Filter/Filter.jsx';
import { ContactList } from './ContactList/ContactList.jsx';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const normalizedName = newContact.name.toLowerCase();
    let contactName = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (contactName) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  deleteContact = evt => {
    const { contacts } = this.state;

    contacts.forEach(element => {
      if (element.name === evt.target.id) {
        const del = contacts.indexOf(element);
        contacts.splice(del, 1);
        console.log(contacts);

        this.setState({
          contacts: contacts,
        });
      }
    });
  };

  onFilter = evt => {
    let name = evt.target.value;
    this.setState({ filter: name });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className="main-card">
        <h1>Phonebook</h1>
        <ContactForma onAdd={this.addContact} />

        <h2>Contacts</h2>
        <Filter inputValue={filter} handleChange={this.onFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}