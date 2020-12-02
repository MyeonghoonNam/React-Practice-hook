import React from 'react';

function User({user}){
  return(
    <div>{user.name}, {user.email}</div>
  )
}

function UserList(){
  const users = [
    {
      id:'1',
      name:"남명훈",
      email:"네이버"
    },
    {
      id:'2',
      name:"김민재",
      email:"다음"
    },
    {
      id:'3',
      name:"이효용",
      email:"구글"
    }
  ]

  return(
    <div>
      {users.map( user => (
        <User user={user} key={user.id}/>
      ))}
    </div>
    
  )
}

export default UserList;