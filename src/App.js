import './App.css';
import {useState,UseEffect} from 'react'
import axios from 'axios'
import Yarn from './components/Yarn'

const App = () => {

  const [yarn,setYarn] = useState([])

  const getYarn = () => {
   axios.get('https://arcane-retreat-34309.herokuapp.com/yarn').then((res) => {
     setYarn(res.data)
   }) 
  }
  return(
    <div className='container'>
      <h1>Welcome to React App</h1>
      <button onClick={getYarn}>Show Yarn Stash</button>
      <Yarn yarn={yarn}/>
    </div>
  )

}

export default App;
