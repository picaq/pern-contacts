import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1> <img src={logo} className="App-logo" alt="logo" />PERN Contacts</h1>
       <Search title ="Search"/>
       <AddContact title = "Add Contact" />
       <ViewAll title ="All Contacts"/>
      </header>
    </div>
  );
}

const Search = (props) => {
  return(
    <>
    <h2>{props.title}</h2>
    <form>
      <label>{props.title}
        <input 
          type="text"
        />
      </label>
      <button
      // onClick = {something}
      
      >
        {props.title}
      </button>
    </form>
    </>
  );
}

const ViewAll = (props) => {
  return(
  <>
  <h2>{props.title}</h2>
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>first name</th>
        <th>last name</th>
        <th>phone</th>
        <th>email</th>
      </tr>
    </thead>
    <tbody>
    {/* { contacts.map( contact => (
      <tr>
        <td>{contact.id}</td>
        <td>{contact.time_seen}</td>
        <td>{contact.last_name}</td>
        <td>{contact.phone_number}</td>
        <td>{contact.email}</td>
      </tr>
    ) )
    } */}
    </tbody>
  </table>
  </>
  );
}

const AddContact = (props) => {
  return(
    <>
    <h2>{props.title}</h2>
    <form>
      <label>first name
        <input 
          type="text"
        />
      </label>


      <button
      // onClick = {something}
      
      >
        {props.title}
      </button>
    </form>
    </>
  );
}




export default App;
