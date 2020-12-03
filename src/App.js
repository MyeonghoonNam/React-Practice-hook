import React, {useRef, useState, useMemo} from 'react';
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users){
  console.log("활성 사용자 수 세는중...");
  return users.filter(user => user.active).length;
}

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
      email:"네이버",
      active:"true"
    },
    {
      id:'2',
      name:"김민재",
      email:"다음",
      active:"false"
    },
    {
      id:'3',
      name:"이효용",
      email:"구글",
      active:"false"
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

  const onToggle = (id) => {
    setUsers(
      users.map(user =>
        user.id === id ? {...user, active:!user.active} : user
      )
    );
  };

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        name={name}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성사용자수:{count}</div>
    </>
  );
}

export default App;
