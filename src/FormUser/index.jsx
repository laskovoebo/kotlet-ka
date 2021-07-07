import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { onSubmit } = this.props;
    onSubmit(userName);
    this.setState({
      userName: '',
    });
  }

  handleClearAll = () => {
    const { clearTable } = this.props;
    clearTable();
  }

  render() {
    const { userName } = this.state;
    return (
      <div className="formUser">
        <lable>
          UserName:
        </lable>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={this.handleInputChange}
        />
        <button
          className="setUser"
          type="button"
          onClick={this.handleClick}
          disabled={!userName.length}
        >
          Add
        </button>
        <button
          className="clearAll"
          type="button"
          onClick={this.handleClearAll}
        >
          Clear all
        </button>
      </div>
    );
  }
}

FormUser.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  clearTable: PropTypes.func.isRequired,
};

export default FormUser;
