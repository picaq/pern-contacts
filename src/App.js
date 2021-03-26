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
  const [firstName, setFirstName] = useState("Mary");
    useEffect( () => {
      console.log("first changed", {firstName})
    }, [firstName] );

  const [lastName, setLastName] = useState("Smith");
    useEffect( () => {
      console.log("last changed", {lastName})
    }, [lastName] );

  const [email, setEmail] = useState("cheese@sauce.org");
    useEffect( () => {
      console.log("email changed", {email})
    }, [email] );

  var r = () => Math.floor(10*Math.random());
  const [phone, setPhone] = useState(""+r()+r()+r()+r()+r()+r()+r()+r()+r()+r());
    useEffect( () => {
      console.log("phone changed", {phone})
    }, [phone] );

    let sendContactObject = () => {
      let first_name = firstName, last_name = lastName, phone_number = phone;
      let contactObject = { first_name, last_name, phone_number, email };
      console.log("Add Contact button pressed", contactObject);
    }

    const onSubmitForm = async (e) => {
      let first_name = firstName, last_name = lastName, phone_number = phone;
      let contactObject = { first_name, last_name, phone_number, email };
      e.preventDefault(); // prevents refreshing
      try {
        const body = contactObject ;
        const response = await fetch("http://localhost:5000/contact", {
          method: "POST", // fetch makes GET request by default
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        })
        console.log(response);
        console.log(contactObject);
        window.location = "/"; // refresh after done sending
      } catch (error) {
        console.error(error.message);  
      }
    }
 

  return(
    <>
    <h2>{props.title}</h2>
    <div>
      <label>{array[0]}
        <input 
          type="text"
          id={array[0]}
          placeholder={firstName}
          name={array[0]}
          onChange={ (e) => setFirstName(e.target.value) }
        />
      </label>
      <label>{array[1]}
        <input 
          type="text"
          id={array[1]}
          placeholder={lastName}
          name={array[1]}
          onChange={ (e) => setLastName(e.target.value) }
        />
      </label>
      <label>{array[2]}
        <input 
          type="text"
          id={array[2]}
          placeholder={phone}
          name={array[2]}
          onChange={ (e) => setPhone(e.target.value) }
        />
      </label>
      <label>{array[3]}
        <input 
          type="text"
          id={array[3]}
          placeholder={email}
          name={array[3]}
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>
      <button
      onClick = { () => sendContactObject(), onSubmitForm }
      name={ props.title }
      value={ props.title }
      
      >
        {props.title}
      </button>
    </div>
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
