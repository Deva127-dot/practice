import React, { useState } from 'react'

function Registration() {
    const [def, setDef]=useState('')
    const abc=(e)=>{
        let item=e.target.value;
        if(item.length>=8){
            alert('name should be 7 char.')
        }
    }
    
  return (
    <div>
    <label>First Name:</label>
      <input type="text" placeholder='First Name' onChange={abc}
      />
      <br />
      <label>Last Name:</label>
      <input type="text" placeholder='Last Name' />
      <br />
      <label>Email:</label>
      <input type="text" placeholder='Email' />
    </div>
  )
}

export default Registration
