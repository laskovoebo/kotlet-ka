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
  }

  render() {
    const { userName } = this.state;
    return (
      <div className="formUser">
        <lable>
          UserName:
        </lable>
        <input type="text" value={userName} onChange={this.handleInputChange} />
        <button
          className="setUser"
          type="button"
          onClick={this.handleClick}
          disabled={!userName.length}
        >
          Add
        </button>
        <button className="clearAll" type="button">
          Clear all
        </button>
      </div>
    );
  }
}

FormUser.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormUser;
