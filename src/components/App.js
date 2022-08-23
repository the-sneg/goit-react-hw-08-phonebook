import React, { Component } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import s from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Вася Джонсон', number: '589-12-224' },
      { id: 'id-2', name: 'Валерій Коперфілд', number: '323-89-124' },
      { id: 'id-3', name: 'Джавеліна Бавовна', number: '544-17-791' },
      { id: 'id-4', name: 'Олег Сміт', number: '227-41-222' },
      { id: 'id-5', name: 'Вікторія Насамс', number: '257-91-263' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
