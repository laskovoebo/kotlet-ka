import React from 'react';
import './style/App.css';
import HeaderTable from './HeaderTable';
import FormUser from './FormUser';

function App() {
  // eslint-disable-next-line no-unused-vars
  const users = [
    { id: 1, name: 'laskovoebo', count: 777 },
    { id: 2, name: 'iphone', count: 12 },
  ];
  return (
    <>
      <HeaderTable />
      <FormUser />
    </>
  );
}

export default App;
