import React, { useContext } from 'react'
import Compoc from './Compoc'
import { myContext, ThemeContext } from '../App'
const Compob = () => { 
  const user = useContext(myContext)
  return (
    <div>
      <Compoc/>
      <h1 style={{color:'green'}}>hello{user}</h1>
    </div>
  )
}

export default Compob
