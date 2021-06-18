import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './userItem.css';

class UserItem extends Component {
  handleDelete = () => {
    const { item: { id }, onDelete } = this.props;
    onDelete(id);
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
  onDelete: PropTypes.func.isRequired,
};

export default UserItem;
