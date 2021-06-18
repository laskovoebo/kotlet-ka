import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './userItem.css';

class UserItem extends Component {
  handleDelete = () => {
    const { item: { id } } = this.props;
    console.log(id);
  }

  render() {
    const { item: { id, name, count } } = this.props;
    return (
      <div className="headerTable">
        <div className="userItemId">
          {id}
        </div>
        <div className="userItemName">
          {name}
        </div>
        <div className="userItemCount">
          {count}
        </div>
        <div className="userDelete">
          <button type="button" onClick={this.handleDelete}>
            delete
          </button>
        </div>
      </div>
    );
  }
}

UserItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    count: PropTypes.number,
  }).isRequired,
};

export default UserItem;
