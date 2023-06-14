import React, { useState } from 'react'
import Input from './Components/input'
import Output from './Components/output'

const App = () => {
  //  Create a state variable called 'username' and its corresponding function 'setUsername'
  const[username, setUsername] = useState('')

  //Callback function that will be called when the input value changes
  const changeInput = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div className='Container bg-black w-screen h-screen m- p-2'>
        {/*Getting the username props from the username state */}
        <Output username={username} />

        {/*Pass the 'changeInput' callback function as a prop to the Input component */}
        <Input whenInputChange={changeInput} /> 
    </div>
  )
}

export default App 
