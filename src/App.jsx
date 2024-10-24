import { createContext, useState } from "react";
import './App.css'
import Compoa from './components/Compoa'
export const ThemeContext = createContext()
export const myContext = createContext()
function App() {
  const [theme, setTheme] = useState('light')
  const [user, setuser] = useState('ramiz')
  return (
    <myContext.Provider value={user}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div id="mydiv" style={{
          backgroundColor: theme == 'light' ?
            "beige" : "black"
        }}>
          <Compoa />
        </div>
      </ThemeContext.Provider>
    </myContext.Provider>

  )
}

export default App

