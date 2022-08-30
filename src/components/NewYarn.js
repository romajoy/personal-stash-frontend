const NewYarn = (props) => {

    
    return(
      <>
      <div className="my-3 border yarn-form">
      <h1>Add Yarn to Stash</h1>
      <form className="row mt-3" onSubmit={props.handleNewYarnSubmit}>
        <div className="col-md-6">
            <label className="form-label">Yarn Brand</label>
            <input className="form-control" type="text" onChange={props.handleYarnBrand}/>
        </div>
        <div className="col-md-6">
            <label className="form-label">Name</label>
            <input className="form-control" type="text" onChange={props.handleYarnName}/>
        </div>
        <div className="col-md-6">
            <label className="form-label">Color of Yarn</label>
            <input className="form-control" type="text" onChange={props.handleYarnColor}/>
        </div>
        <div className="col-md-6">
            <label className="form-label">No. of Yards</label>
            <input className="form-control" type="number" onChange={props.handleYarnYards}/>
        </div>
        <div className="col-md-6">
            <label className="form-label">Yarn Material</label>
            <input className="form-control" type="text" onChange={props.handleYarnFiber}/>
        </div>
        <div className="col-md-6">
            <label className="form-label">Yarn Weight</label>
            <select className="form-select" onChange={props.handleYarnWeight}>
                <option ></option>
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
            <label className="form-label">Date of Purchase</label>
            <input className="form-control" type="date" onChange={props.handleYarnPurchase}/>
        </div>
        <div className="col-md-6">
            <label className="form-label">No. of Available Skeins </label>
            <input className="form-control" type="number" onChange={props.handleYarnSkeins}/>
        </div>
        <div className="col-md-6">
            <label className="form-label">Purchase Location</label>
            <input className="form-control" type="text" onChange={props.handleYarnStore}/>
        </div>
        <div className="col-md-12">
            <label className="form-label">Notes</label>
            <textarea className="form-control" type="text" onChange={props.handleYarnNote}/>
        </div>
        <div className="col-md-12">
            <label className="form-label">Image URL</label>
            <textarea className="form-control" type="url" onChange={props.handleYarnImage}/>
        </div>
        <div className="col-12 m-3">
            <input className="btn btn-outline-success" type="submit" value="Add New Yarn"/>
        </div>
      </form>
      </div>
      </>
    )
  }
  export default NewYarn