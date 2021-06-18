import React from 'react';
import PropTypes from 'prop-types';
import './userItem.css';

const UserItem = ({ item: { id, name, count } }) => (
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
      <button type="button">
        delete
      </button>
    </div>
  </div>
);

UserItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    count: PropTypes.number,
  }).isRequired,
};

export default UserItem;
