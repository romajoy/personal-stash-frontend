const NewYarn = (props) => {

    
    return(
      <>
      <div className="my-3 border yarn-form" style={{backgroundColor:`${props.borderColor()}`}}>
      <h1>Add Yarn to Stash</h1>
      <form className="row mt-3" onSubmit={props.handleNewYarnSubmit}>
        <div className="col-md-6">
            
            <input className="form-control" type="text" onChange={props.handleYarnBrand} placeholder="Yarn Brand" />
        </div>
        <div className="col-md-6">
            
            <input className="form-control" type="text" onChange={props.handleYarnName} placeholder="Yarn Name"/>
        </div>
        <div className="col-md-6">
            <label></label>
            <input className="form-control" type="text" onChange={props.handleYarnColor} placeholder="Color"/>
        </div>
        <div className="col-md-6">
            <label className="form-label"></label>
            <input className="form-control" type="number" onChange={props.handleYarnYards} placeholder="Yardage per skein"/>
        </div>
        <div className="col-md-6">
            <label className="form-label"></label>
            <input className="form-control" type="text" onChange={props.handleYarnFiber} placeholder="Fiber"/>
        </div>
        <div className="col-md-6">
            <label className="form-label"></label>
            <select className="form-select" onChange={props.handleYarnWeight}>
                <option disabled>Yarn Weight</option>
                <option >Lace</option>
                <option >Sock, Fingering, Super Fine</option>
                <option >Sport, Baby</option>
                <option >DK, Light Worsted</option>
                <option >Worsted, Aran</option>
                <option >Chunky, Bulky</option>
                <option >Super Bulky</option>
                <option >Jumbo, Roving</option>
            </select>
        </div>      
        <div className="col-md-6">
            <label></label>
            <input className="form-control" type="number" onChange={props.handleYarnSkeins} placeholder="Number of Skeins" />
        </div>
         <div className="col-md-6">
            <label></label>
            <input className="form-control" type="url" onChange={props.handleYarnImage} placeholder="Image URL"/>
        </div>  

        <div className="col-md-6 mt-4  input-group">
           <input className="form-control" type="text" onChange={props.handleYarnStore} placeholder="Yarn Store"/>
           <span className="input-group-text ">Purchase Date</span>

            <input className="form-control" type="date" onChange={props.handleYarnPurchase}/>
        </div>
        
             
        <div className="col-md-12">
            <label className="form-label"></label>
            <textarea className="form-control" type="text" onChange={props.handleYarnNote} placeholder="Notes"/>
        </div>

        <div className="col-12 m-3">
            <input className="btn btn-outline-primary" type="submit" value="Add New Yarn"/>
        </div>
      </form>
      </div>
      </>
    )
  }
  export default NewYarn