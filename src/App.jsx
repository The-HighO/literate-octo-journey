import React from 'react'
import Input from './Components/input'
import Output from './Components/output'

const App = () => {
  return (
    <div className='Container'>
        {/* Displaying multiple text from output.jsx component */}
        <Output/>
        <br />
        <Output/>
         {/* Displaying input field from input.jsx xomponent  */}
        <Input/>
    </div>
  )
}

export default App