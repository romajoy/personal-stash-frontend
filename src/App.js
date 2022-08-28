import './App.css';
import {useState,UseEffect} from 'react'
import axios from 'axios'
import Yarn from './components/Yarn'
import Hook from './components/Hook'

const App = () => {

  const [yarn,setYarn] = useState([])
  const [hook,setHook] = useState([])

  const getYarn = () => {
   axios.get('https://arcane-retreat-34309.herokuapp.com/yarn').then((res) => {
     setYarn(res.data)
   }) 
  }
  const getHook = () => {
    axios.get('https://arcane-retreat-34309.herokuapp.com/hooks').then((res) => {
      setHook(res.data)
    }) 
   }

   

  return(
    <div className='container'>
      <h1>Welcome to Crafting Stash</h1>
      <button onClick={getYarn}>Show Yarn Stash</button>
      <button onClick={getHook}>Show Hooks Stash</button>
      <div className='row'>
      <Yarn yarn={yarn}/>
      <Hook hook={hook}/>
      </div>
    </div>
  )

}

export default App;
