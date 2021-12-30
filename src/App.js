import React, { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {


  const [users, setUsers] = useState([]);


  const loaduser = async () => {
    const res = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await res.json();
    setUsers(jsonResponse.data);
  }

  return (
    <>
    <div className = "navbar">
      <a className = "logo"> Lets Grow More Team</a>
      <button className="get-btn" onClick={loaduser}>Get User</button>
    </div>
    <div className = "container">
      {users.map(({ id, email, first_name, last_name, avatar }) => (
        <Card imglink={avatar}  email={email} name={`${first_name} ${last_name}`} />
      ))}
    </div>

    </>

  );
}

export default App;
