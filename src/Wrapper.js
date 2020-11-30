import React from 'react';

function Wrapper({children}){
  const style = {
    border:"solid 2px black",
    padding:"16px"
  }

  return(
    <div style={style}>
      {children}
    </div>
  )
}

export default Wrapper;