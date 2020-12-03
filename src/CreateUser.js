import React, {useRef, useContext} from 'react';
import useInputs from "./hooks/useInputs";
import {UserDispatch} from "./App";

const CreateUser = () => {
  const [{name, email}, onChange, reset] = useInputs({
    name:'',
    email:''
  });

  const nextId = useRef(4);
  const dispatch = useContext(UserDispatch);

  const onCreate = () => {
    dispatch({
      type:"CREATE_USER",
      user:{
        id:nextId.current,
        name,
        email
      }
    });
    reset();
    nextId.current += 1;
  }

  return(
    <div>
      <input name="name" placeholder="계정" onChange={onChange} value={name}/>
      <input name="email" placeholder="이메일" onChange={onChange} value={email}/>
      <button onClick={onCreate}>등록</button>
    </div>
  )
}

export default React.memo(CreateUser);