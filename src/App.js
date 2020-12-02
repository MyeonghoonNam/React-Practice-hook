import React, {useRef} from 'react';
import UserList from "./UserList";

function App() {
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

  const nextId = useRef(4);
  const onCreate = () => {
    // 추후 구현

    nextId.current += 1;
  }

  return (
    <UserList users={users}/>
  );
}

export default App;
