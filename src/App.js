import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1> <img src={logo} className="App-logo" alt="logo" />PERN Contacts</h1>
       <Search />
       <AddContact />
       <ViewAll />
      </header>
    </div>
  );
}

const Search = (props) => {
  return(
    <form>
      <label>Search
        <input 
          type="text"
        />
      </label>
      <button 
        onClick = {something}
      />
    </form>
  );
}




export default App;
