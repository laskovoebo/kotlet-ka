import React from 'react';
import './headerTable.css';
import PropTypes from 'prop-types';
import UserItem from '../UserItem';
import UserInfoTable from '../UserInfoTable';

const HeaderTable = ({ items }) => {
  console.log(items); // это просто чтобы был return
  return (
    <div className="table">
      <UserInfoTable />
      <div className="headerTable">
        <UserItem />
      </div>
    </div>
  );
};

HeaderTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    count: PropTypes.number,
  })).isRequired,
};

export default HeaderTable;
