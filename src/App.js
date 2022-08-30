import './App.css';
import {useState} from 'react'
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
  const [yarnFiber,setYarnFiber] = useState("")
  const [yarnWeight,setYarnWeight] = useState("")
  const [yarnPurchase,setYarnPurchase] = useState()
  const [yarnSkeins,setYarnSkeins] = useState()
  const [yarnStore,setYarnStore] = useState("")
  const [yarnNote,setYarnNote] = useState("")
  const [yarnImage,setYarnImage] = useState("")
  const [addYarn, setAddYarn] = useState(false)

  //Variables for Hooks/Needles
  const [hook,setHook] = useState([])
  const [hookSize,setHookSize] = useState("")
  const [hookBrand,setHookBrand] = useState("")
  const [hookMaterial,setHookMaterial] = useState("")
  const [hookInUse,setHookInUse] = useState(false)
  const [hookProject,setHookProject] = useState("")
  const [hookNotes,setHookNotes] = useState("")
  const [hookFavorite,setHookFavorite] = useState(false)
  const [hookReplace,setHookReplace] = useState(false)
  const [hookStyle,setHookStyle] = useState("")
  const [hookLong,setHookLong] = useState("")
  const [hookPoint,setHookPoint] = useState("")
  const [hookComplete,setHookComplete] = useState(false)
  const [hookImage,setHookImage] = useState("")
  const [addHooks, setAddHooks] = useState(false)

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
  const handleYarnFiber = (event) => {
    setYarnFiber(event.target.value)
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
  const handleYarnImage = (event) => {
    setYarnImage(event.target.value)
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
      fiber:yarnFiber,
      weight:yarnWeight,
      purchaseDate:yarnPurchase,
      skeins:yarnSkeins,
      store:yarnStore,
      note:yarnNote,
      image:yarnImage
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

  const handleYarnUpdate = (yarnData) => {
    axios.put(`https://arcane-retreat-34309.herokuapp.com/yarn/${yarnData._id}`, {
      brand:yarnBrand ? yarnBrand : yarnData.brand,
      name:yarnName ? yarnName : yarnData.name,
      color:yarnColor ? yarnColor : yarnData.color,
      yards:yarnYards ? yarnYards : yarnData.yards,
      fiber:yarnFiber ? yarnFiber : yarnData.fiber,
      weight:yarnWeight ? yarnWeight : yarnData.weight,
      purchaseDate: yarnPurchase ? yarnPurchase : yarnData.purchaseDate,
      skeins:yarnSkeins ? yarnSkeins : yarnData.skeins,
      store:yarnStore ? yarnStore : yarnData.store,
      note:yarnNote ? yarnNote : yarnData.note,
      image:yarnImage ? yarnImage : yarnData.image
    }).then(() => {
      axios.get('https://arcane-retreat-34309.herokuapp.com/yarn').then((res) => {
        setYarn(res.data)
      })
    })
  }

  // Function to show "Add New Hook" form
  const addHooksButton = () => {
     addHooks ? setAddHooks(false) : setAddHooks(true)
  }
  const addYarnButton = () => {
    addYarn ? setAddYarn(false) : setAddYarn(true)
  }


  //Functions for Hook/Needle API
  //Variable for Hook/Needle Form
  const handleHookSize = (event) => {
    setHookSize(event.target.value)
  }
  const handleHookBrand = (event) => {
    setHookBrand(event.target.value)
  }
  const handleHookMaterial = (event) => {
    setHookMaterial(event.target.value)
  }
  const handleHookInUse = (event) => {
    setHookInUse(event.target.checked)
  }
  const handleHookProject = (event) => {
    setHookProject(event.target.value)
  }
  const handleHookNotes = (event) => {
    setHookNotes(event.target.value)
  }
  const handleHookFavorite = (event) => {
    setHookFavorite(event.target.checked)
  }
  const handleHookReplace = (event) => {
    setHookReplace(event.target.checked)
  }
  const handleHookStyle = (event) => {
    setHookStyle(event.target.value)
  }
  const handleHookLong = (event) => {
    setHookLong(event.target.value)
  }
  const handleHookPoint = (event) => {
    setHookPoint(event.target.value)
  }
  const handleHookComplete = (event) => {
    setHookComplete(event.target.checked)
  } 
  const handleHookImage = (event) => {
    setHookImage(event.target.value)
  }   

  //Function to get data from API
  const getHook = () => {
    axios.get('https://arcane-retreat-34309.herokuapp.com/hooks').then((res) => {
      setHook(res.data)
    })
    setPage("hook") 
   }

   //Function for New Hook/Needle Form Submit
   const handleNewHookSubmit = (event) => {
    event.preventDefault()
     axios.post('https://arcane-retreat-34309.herokuapp.com/hooks',{
      size: hookSize,
      brand:hookBrand,
      material:hookMaterial,
      inUse:hookInUse,
      project:hookProject,
      notes:hookNotes,
      favorite:hookFavorite,
      replace:hookReplace,
      style:hookStyle,
      long:hookLong,
      point:hookPoint,
      completeSet:hookComplete,
      image:hookImage      
     }).then(() => {
      axios.get('https://arcane-retreat-34309.herokuapp.com/hooks').then((res) => {
        setHook(res.data)
      })
     })
   }

   //Function to Delete Data from API
   const handleHookDelete = (hookData) => {
    axios.delete(`https://arcane-retreat-34309.herokuapp.com/hooks/${hookData._id}`).then(() => {
      axios.get('https://arcane-retreat-34309.herokuapp.com/hooks').then((res) => {
        setHook(res.data)
      })
    })
  }

  //Function to Update Entry from API
  const handleHookUpdate = (hookData) => {
    axios.put(`https://arcane-retreat-34309.herokuapp.com/hooks/${hookData._id}`, {
      size: hookSize ? hookSize : hookData.size,
      brand: hookBrand ? hookBrand : hookData.brand,
      material: hookMaterial ? hookMaterial : hookData.material,
      inUse: hookInUse ? hookInUse : hookData.inUse,
      project: hookProject ? hookProject : hookData.project,
      notes: hookNotes ? hookNotes : hookData.notes,
      favorite: hookFavorite ? hookFavorite : hookData.favorite,
      replace: hookReplace ? hookReplace : hookData.replace,
      style: hookStyle ? hookStyle : hookData.style,
      long: hookLong ? hookLong : hookData.long,
      point: hookPoint ? hookPoint : hookData.point,
      completeSet: hookComplete ? hookComplete : hookData.completeSet,
      image: hookImage ? hookImage : hookData.image 
    }).then(() => {
      axios.get('https://arcane-retreat-34309.herokuapp.com/hooks').then((res) => {
        setHook(res.data)
      })
    })
  }

  const borderColor = () => {
    const red = Math.floor( Math.random() * 256 );
    const green = Math.floor( Math.random() * 256 );
    const blue = Math.floor( Math.random() * 256 );
    return(`rgb(${red}, ${green}, ${blue})`)
  }

  return(
    <div className='container-fluid'>
      <div className='craft-header' style={{backgroundColor:`${borderColor()}`}}>
      <h1>Welcome to Crafting Stash</h1>
      <button className='btn btn-outline-info me-3' onClick={getYarn}>Show Yarn Stash</button>
      <button className='btn btn-outline-warning' onClick={getHook}>Show Hooks Stash</button>
      </div>
      <div className='row page-content'>
        {page === "yarn" ?
        <>
        <div className='addButton'>
          <button className=" mt-3 btn btn-outline-primary" onClick={addYarnButton}>Add New Yarn</button>
        </div>
        { addYarn ? 
        <div>
        <NewYarn handleYarnBrand={handleYarnBrand} handleYarnName={handleYarnName} handleYarnColor={handleYarnColor} handleYarnYards={handleYarnYards} handleYarnFiber={handleYarnFiber} handleYarnWeight={handleYarnWeight} handleYarnPurchase={handleYarnPurchase} handleYarnSkeins={handleYarnSkeins} handleYarnStore={handleYarnStore}
        handleYarnNote={handleYarnNote} handleYarnImage={handleYarnImage} handleNewYarnSubmit={handleNewYarnSubmit} borderColor={borderColor}/>
        </div> : null }
        <div className="yarn-cards">
        <Yarn yarn={yarn} handleYarnBrand={handleYarnBrand} handleYarnName={handleYarnName} handleYarnColor={handleYarnColor} handleYarnYards={handleYarnYards} handleYarnFiber={handleYarnFiber} handleYarnWeight={handleYarnWeight} handleYarnPurchase={handleYarnPurchase} handleYarnSkeins={handleYarnSkeins} handleYarnStore={handleYarnStore}
        handleYarnNote={handleYarnNote} handleYarnImage={handleYarnImage} handleYarnDelete={handleYarnDelete} handleYarnUpdate={handleYarnUpdate} borderColor={borderColor}/>
        </div>
        </>
        : page === "hook" ?
        <>
        <div className='addButton'>
        <button className="mt-3 btn btn-outline-success" onClick={addHooksButton}>Add New Hook/Needles</button>
        </div>
        { addHooks ? 
        <div>
        <NewHook handleHookBrand={handleHookBrand} handleHookSize={handleHookSize} handleHookMaterial={handleHookMaterial} handleHookInUse={handleHookInUse} handleHookProject={handleHookProject} handleHookNotes={handleHookNotes} handleHookFavorite={handleHookFavorite} handleHookReplace={handleHookReplace} handleHookStyle={handleHookStyle} handleHookLong={handleHookLong} handleHookPoint={handleHookPoint} handleHookComplete={handleHookComplete} handleHookImage={handleHookImage} handleNewHookSubmit={handleNewHookSubmit} borderColor={borderColor}/>
        </div> : null }
        <div className="hook-cards">
        <Hook hook={hook} handleHookBrand={handleHookBrand} handleHookSize={handleHookSize} handleHookMaterial={handleHookMaterial} handleHookInUse={handleHookInUse} handleHookProject={handleHookProject} handleHookNotes={handleHookNotes} handleHookFavorite={handleHookFavorite} handleHookReplace={handleHookReplace} handleHookStyle={handleHookStyle} handleHookLong={handleHookLong} handleHookPoint={handleHookPoint} handleHookComplete={handleHookComplete} handleHookImage={handleHookImage} handleHookUpdate={handleHookUpdate} handleHookDelete={handleHookDelete} borderColor={borderColor}/>
        </div>
        </>
        :null}
      </div>
    </div>
  )

}

export default App;
