import React, {useRef, useState} from 'react';
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    name:'',
    email:''
  });

  const {name, email} = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    })
  }

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id:nextId.current,
      name,
      email
    }

    setUsers(users.concat(user));

    setInputs({
      name:'',
      email:''
    })

    nextId.current += 1;
  }

  const onRemove = (id) => {
    setUsers(users.filter(user => 
      user.id !== id
    ));
  }

  return (
    <>
      <CreateUser
        name={name}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove}/>
    </>
  );
}

export default App;
