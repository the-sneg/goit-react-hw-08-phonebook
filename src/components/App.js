import React, { Component } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import s from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmit = data => {
    let findName = this.state.contacts.find(item => item.name === data.name);

    if (findName) {
      return alert(`${data.name} is already in contact`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, data],
      }));
    }
  };

  onFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handleClickDeleteBtn = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const filterTolowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterTolowerCase)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
        <Form onSubmit={this.onSubmit} />

        <h2 className={s.title}>Contacts</h2>
        <Filter value={filter} onChange={this.onFilter} />

        <ContactList
          contacts={visibleContacts}
          onDeleteClick={this.handleClickDeleteBtn}
        />
      </div>
    );
  }
}
