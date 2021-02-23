import './App.css';
import Form from './Form';
import React, { useState } from 'react';

function App(props) {
  const [memberList, setMemberList] = useState([]);
  function addMember(member) {
    setMemberList({
      ...member,
      name: member.name,
      email: member.email,
      role: member.role
    })
  }
  console.log(memberList)
  return (
    <div className="App">
      <h1>Add a New Team Member:</h1>
      <Form addMember={addMember} name={props.name} email={props.email} role={props.role} />
      <h2>Current Team:</h2>
      <div>
        <p>Name: {memberList.name}</p>
        <p>E-mail: {memberList.email}</p>
        <p>Role: {memberList.role}</p>
      </div>
    </div>
  );
}

export default App;
