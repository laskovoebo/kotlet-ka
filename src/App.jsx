import React, { Component } from 'react';
import './style/App.css';
import HeaderTable from './HeaderTable';
import FormUser from './FormUser';

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
  }

  handleDelete = (id) => {
    const { users } = this.state;
    const filteredUsers = users.filter(user => user.id !== id);
    this.setState({
      users: filteredUsers,
    });
  }

  render() {
    const { users } = this.state;
    return (
      <>
        <HeaderTable items={users} handleDelete={this.handleDelete} />
        <FormUser onSubmit={this.handleSubmit} />
      </>
    );
  }
}

export default App;
