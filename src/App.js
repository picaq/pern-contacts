import * as React from "react";

import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {" "}
          <img src={logo} className="App-logo" alt="logo" />
          PERN Contacts
        </h1>
        <AddContact title="Add Contact" />
        <Search title="Search" />
        {/* <ViewAll title ="All Contacts"/> */}
      </header>
    </div>
  );
}

const AddContact = (props) => {
  let array = ["first name", "last name", "phone", "email"];
  const [firstName, setFirstName] = React.useState("Mary");

  const [lastName, setLastName] = React.useState("Smith");

  const [email, setEmail] = React.useState("cheese@sauce.org");

  var r = () => Math.floor(10 * Math.random());
  const [phone, setPhone] = React.useState(
    "" + r() + r() + r() + r() + r() + r() + r() + r() + r() + r()
  );

  const onSubmitForm = async (e) => {
    let first_name = firstName,
      last_name = lastName,
      phone_number = phone;
    let contactObject = { first_name, last_name, phone_number, email };
    e.preventDefault(); // prevents refreshing
    try {
      const body = contactObject;
      const response = await fetch("/contacts", {
        method: "POST", // fetch makes GET request by default
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      console.log(contactObject);
      // window.location = "/"; // refresh after done sending
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h2>{props.title}</h2>
      <div>
        <label>
          {array[0]}
          <input
            type="text"
            id={array[0]}
            placeholder={firstName}
            name={array[0]}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          {array[1]}
          <input
            type="text"
            id={array[1]}
            placeholder={lastName}
            name={array[1]}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          {array[2]}
          <input
            type="text"
            id={array[2]}
            placeholder={phone}
            name={array[2]}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          {array[3]}
          <input
            type="text"
            id={array[3]}
            placeholder={email}
            name={array[3]}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button onClick={onSubmitForm} name={props.title} value={props.title}>
          {props.title}
        </button>
      </div>
    </>
  );
};

const Search = (props) => {
  const [contacts, setContacts] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  const queryContacts = (searchTerm) => async () => {
    const url = new URL("/contacts", window.location.origin);
    if (searchTerm !== undefined) {
      url.search = new URLSearchParams({ lastName: searchTerm }).toString();
    }
    try {
      setContacts(await (await fetch(url)).json());
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h2>{props.title}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          queryContacts(searchTerm)();
        }}
      >
        <label>
          {props.title}
          <input
            type="text"
            placeholder="search by last name"
            onChange={(e) => setSearchTerm(e.currentTarget.value)}
          />
        </label>

        <button>{props.title}</button>
        <button type="button" onClick={queryContacts()}>
          View All
        </button>
      </form>

      <h2>
        {contacts.length > 0 ? "" : "No"} {props.title} Results
      </h2>
      {contacts.length > 0 ? (
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
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.first_name}</td>
                <td>{contact.last_name}</td>
                <td>{contact.phone_number}</td>
                <td>{contact.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p> No results found </p>
      )}
    </>
  );
};

export default App;
