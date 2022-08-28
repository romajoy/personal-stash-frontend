import './App.css';
import {useState,UseEffect} from 'react'
import axios from 'axios'
import Yarn from './components/Yarn'
import Hook from './components/Hook'
import NewYarn from './components/NewYarn'
import NewHook from './components/NewHook'

const App = () => {

  const [page,setPage] = useState("")

  //Variables for Yarn
  const [yarn,setYarn] = useState([])
  const [yarnBrand,setYarnBrand] = useState("")
  const [yarnName,setYarnName] = useState("")
  const [yarnColor,setYarnColor] = useState("")
  const [yarnYards,setYarnYards] = useState()
  const [yarnWeight,setYarnWeight] = useState("")
  const [yarnPurchase,setYarnPurchase] = useState("")
  const [yarnSkeins,setYarnSkeins] = useState()
  const [yarnStore,setYarnStore] = useState("")
  const [yarnNote,setYarnNote] = useState("")

  //Variables for Hooks/Needles
  const [hook,setHook] = useState([])

 
  


  //Functions for Yarn API
  const handleYarnBrand = (event) => {
    setYarnBrand(event.target.value)
  }
  const handleYarnName = (event) => {
    setYarnName(event.target.value)
  }
  const handleYarnColor = (event) => {
    setYarnColor(event.target.value)
  }
  const handleYarnYards = (event) => {
    setYarnYards(event.target.value)
  }
  const handleYarnWeight = (event) => {
    setYarnWeight(event.target.value)
  }
  const handleYarnPurchase = (event) => {
    setYarnPurchase(event.target.value)
  }
  const handleYarnSkeins = (event) => {
    setYarnSkeins(event.target.value)
  }
  const handleYarnStore = (event) => {
    setYarnStore(event.target.value)
  }
  const handleYarnNote = (event) => {
    setYarnNote(event.target.value)
  }
  const getYarn = () => {
    axios.get('https://arcane-retreat-34309.herokuapp.com/yarn').then((res) => {
      setYarn(res.data)
    })
    setPage("yarn") 
   }
  const handleNewYarnSubmit = (event) => {
    event.preventDefault();
    axios.post('https://arcane-retreat-34309.herokuapp.com/yarn',{
      brand:yarnBrand,
      name:yarnName,
      color:yarnColor,
      yards:yarnYards,
      weight:yarnWeight,
      purchaseDate:yarnPurchase,
      skeins:yarnSkeins,
      store:yarnStore,
      note:yarnNote
    }).then(() => {
      axios.get('https://arcane-retreat-34309.herokuapp.com/yarn').then((res) => {
        setYarn(res.data)
      })
    }) 
  } 
  const handleYarnDelete = (yarnData) => {
    axios.delete(`https://arcane-retreat-34309.herokuapp.com/yarn/${yarnData._id}`).then(() => {
      axios.get('https://arcane-retreat-34309.herokuapp.com/yarn').then((res) => {
        setYarn(res.data)
      })
    })
  }

  //Functions for Hook/Needle API
  const getHook = () => {
    axios.get('https://arcane-retreat-34309.herokuapp.com/hooks').then((res) => {
      setHook(res.data)
    })
    setPage("hook") 
   }
   const handleHookDelete = (hookData) => {
    axios.delete(`https://arcane-retreat-34309.herokuapp.com/hooks/${hookData._id}`).then(() => {
      axios.get('https://arcane-retreat-34309.herokuapp.com/hooks').then((res) => {
        setHook(res.data)
      })
    })
  }

  return(
    <div className='container'>
      <h1>Welcome to Crafting Stash</h1>
      <button onClick={getYarn}>Show Yarn Stash</button>
      <button onClick={getHook}>Show Hooks Stash</button>
      <div className='row'>
        {page === "yarn" ?
        <>
        <NewYarn handleYarnBrand={handleYarnBrand} handleYarnName={handleYarnName} handleYarnColor={handleYarnColor} handleYarnYards={handleYarnYards} handleYarnWeight={handleYarnWeight} handleYarnPurchase={handleYarnPurchase} handleYarnSkeins={handleYarnSkeins} handleYarnStore={handleYarnStore}
        handleYarnNote={handleYarnNote} handleNewYarnSubmit={handleNewYarnSubmit}/>
        <Yarn yarn={yarn} handleYarnDelete={handleYarnDelete}/>
        </>
        : page === "hook" ?
        <>
        <Hook hook={hook} handleHookDelete={handleHookDelete}/>
        </>
        :null}
      </div>
    </div>
  )

}

export default App;
