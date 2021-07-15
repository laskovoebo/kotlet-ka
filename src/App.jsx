import React, { Component } from 'react';
import './style/App.css';
import HeaderTable from './HeaderTable';
import FormUser from './FormUser';
import Popup from './Popup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'laskovoebo', count: 777 },
        { id: 2, name: 'iphone', count: 12 },
      ],
    };
  }

  get newId() {
    const { users } = this.state;
    const ids = users.map(({ id }) => id).sort((a, b) => a - b);
    return ids[ids.length - 1] + 1 || 1;
  }

  handleSubmit = value => {
    const { users } = this.state;
    const newName = users
      .some(user => user.name === value);
    if (newName !== true) {
      this.setState({
        users: [
          {
            id: this.newId,
            name: value,
            count: 0,
          },
          ...users,
        ],
      });
    } else {
      alert('Соси пису, занято');
    }
  }

  handleDelete = (id) => {
    const { users } = this.state;
    const filteredUsers = users.filter(user => user.id !== id);
    this.setState({
      users: filteredUsers,
    });
  }

  handleCount = (id, currentCount) => {
    const { users } = this.state;
    const countUser = users
      .map(user => (user.id === id ? ({ ...user, count: currentCount + 1 }) : user));
    this.setState({
      users: countUser,
    });
  }

  handleClearAll = () => {
    if (window.confirm('Подтвердить действие?')) {
      this.setState({
        users: [],
      });
    }
  }

  render() {
    const { users } = this.state;
    return (
      <>
        <Popup />
        <HeaderTable
          items={users}
          handleDelete={this.handleDelete}
          handleCount={this.handleCount}
        />
        <FormUser
          onSubmit={this.handleSubmit}
          clearTable={this.handleClearAll}
        />
      </>
    );
  }
}

export default App;
