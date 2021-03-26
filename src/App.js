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

const AddContact = (props) => {
  let array = ["first name", "last name", "phone", "email"];
  return(
    <>
    <h2>{props.title}</h2>
    <form>
      <label>{array[0]}
        <input 
          type="text"
          id={array[0]}
          placeholder={array[0]}
          name={array[0]}
        />
      </label>
      <label>{array[1]}
        <input 
          type="text"
          id={array[1]}
          placeholder={array[1]}
          name={array[1]}
        />
      </label>
      <label>{array[2]}
        <input 
          type="text"
          id={array[2]}
          placeholder={array[2]}
          name={array[2]}
        />
      </label>
      <label>{array[3]}
        <input 
          type="text"
          id={array[3]}
          placeholder={array[3]}
          name={array[3]}
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




export default App;
