import React from 'react';

function CreateUser({name, email, onChange, onCreate}){
  return(
    <div>
      <input name="name" placeholder="계정" onChange={onChange} value={name}/>
      <input name="email" placeholder="이메일" onChange={onChange} value={email}/>
      <button onClick={onCreate}>등록</button>
    </div>
  )
}

export default React.memo(CreateUser);