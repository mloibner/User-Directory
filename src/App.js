//Ties whole app together, renders all components. state about results in here so that can sort and search as per requirements in readme.

import React, { useState, useEffect } from "react";
import {Header} from "./components/Header";
import {Search} from "./components/Search";
import {Table} from "./components/Table";
import { getUsers, sortHeading } from "./utils/api";


function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  //Set users in the table
  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users.data.results);
      setFilteredUsers(users.data.results);
    }).catch(e => {
      console.error(e)
    });
  }, []); 

  //Search by user name or email or login
  function handleInputChange(value) {
    const searchedUsers = users.filter(user =>
      user.name.first.includes(value) || user.name.last.includes(value) || user.email.includes(value) || user.login.username.includes(value)
    ); 
    setFilteredUsers(searchedUsers)
  };  
  
  
  //render to browser
  return ( 
    <div>
      <Header/>
      <Search handleInputChange = { handleInputChange}/>
      <Table users = { filteredUsers }/> 
    </div>
  );
}
  



export default App;
