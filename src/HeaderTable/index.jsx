import React from 'react';
import './headerTable.css';
import PropTypes from 'prop-types';
import UserItem from '../UserItem';
import UserInfoTable from '../UserInfoTable';

const HeaderTable = ({ items, handleDelete, handleCount }) => {
  console.log(items); // это просто чтобы был return
  return (
    <div className="table">
      <UserInfoTable />
      {items.map((item, key) => (
        <UserItem
          item={item}
          key={key}
          onDelete={handleDelete}
          addCount={handleCount}
        />
      ))}
    </div>
  );
};

HeaderTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    count: PropTypes.number,
  })).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleCount: PropTypes.func.isRequired,
};

export default HeaderTable;
