import React, { useState } from 'react'
import Input from './Components/input'
import Output from './Components/output'

const App = () => {
  // Creating a username state that would be updated from the input component
  const[username, setUsername] = useState('')

  // Updating username with the value of the input 
  const changeInput = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div className='Container bg-black w-screen h-screen m- p-2'>
        {/*Getting the username props from the username state */}
        <Output username={username} />
        {/*Adding */}
        <Input whenInputChange={changeInput} /> 
    </div>
  )
}

export default App 
