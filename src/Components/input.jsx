import React from 'react'

const Input = ({ whenInputChange }) => {
    
  return (
    // creating input field and adding the onchange attribute that calls the whenInputChange prop that is responsible for handling changes in the input field's value.
        <input type="text" className='theInput ' placeholder='ENTER YOUR USERNAME' onChange={whenInputChange}/>
  )
}

export default Input


