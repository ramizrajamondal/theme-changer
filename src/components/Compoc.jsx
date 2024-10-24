import React, { useContext } from 'react'
import {ThemeContext} from '../App'
function Compoc() {
  const {theme,setTheme} = useContext(ThemeContext)
  const bgchange = () => {
    if(theme === 'light'){
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
  }
  return (
    <div>
      <button onClick={bgchange}>Change Color</button>
    </div>
  )
}

export default Compoc
