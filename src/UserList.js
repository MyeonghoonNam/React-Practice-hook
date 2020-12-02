import React from 'react';

function User({user}){
  return(
    <div>{user.name}, {user.email}</div>
  )
}

function UserList({users}){
  return(
    <div>
      {users.map( user => (
        <User user={user} key={user.id}/>
      ))}
    </div>
    
  )
}

export default UserList;