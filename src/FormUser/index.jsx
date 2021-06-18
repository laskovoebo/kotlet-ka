import React, { Component } from 'react';
import './formUser.css';

class FormUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  handleInputChange = ev => {
    this.setState({
      userName: ev.target.value,
    });
  }

  handleClick = () => {
    const { userName } = this.state;
    // eslint-disable-next-line no-console
    console.log(userName);
  }

  render() {
    const { userName } = this.state;
    return (
      <div className="formUser">
        <lable>
          UserName:
        </lable>
        <input type="text" value={userName} onChange={this.handleInputChange} />
        <button className="setUser" type="button" onClick={this.handleClick}>
          Add
        </button>
        <button className="clearAll" type="button">
          Clear all
        </button>
      </div>
    );
  }
}

export default FormUser;
