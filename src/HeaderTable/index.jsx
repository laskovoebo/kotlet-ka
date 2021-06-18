import React from 'react';
import './headerTable.css';
import UserInfoTable from '../UserInfoTable';
import UserItem from '../UserItem';

const HeaderTable = () => {
  console.log('render'); // это просто чтобы был return
  return (
    <div className="table">
      <UserInfoTable />
      <div className="headerTable">
        <UserItem />
      </div>
    </div>
  );
};

export default HeaderTable;
