import React from 'react';
import './style/App.css';
import HeaderTable from './HeaderTable';
import FormUser from './FormUser';

function App() {
  const users = [
    { id: 1, name: 'laskovoebo', count: 777 },
    { id: 2, name: 'iphone', count: 12 },
  ];
  return (
    <>
      <HeaderTable items={users} />
      <FormUser />
    </>
  );
}

export default App;
