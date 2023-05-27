import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

function UsersFunction() {
    const [user, setUser] = useState([])
   
  
    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then(res => {
            console.log(res);
            setUser(res.data);
          })
          .catch(err => console.log(err));
      }, []);
      
    return (
      <div>
           <>

{user.map(user =>
    <div key={user.id} className="user-container">
        <p className="user-name" >Name: {user.name}</p>
        <p className="user-details"> Username: {user.username}</p>
        <p className="user-details">Email :{user.email}</p>
    </div>
)}

</>
    </div>
  )
}

export default UsersFunction