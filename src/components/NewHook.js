const NewHook = (props) => {

    
    return(
      <>
      <div className="my-3 border">
      <h1>Add Hook/Needle to Stash</h1>
      <form className=" mt-3" onSubmit={props.handleNewHookSubmit}>
        <div className="row">
        <div className="col-md-6">
            <label className="form-label">Hook Size</label>
            <input className="form-control" type="text" onChange={props.handleHookSize}/>
        </div>
        <div className="col-md-6">
            <label className="form-label">Brand</label>
            <input className="form-control" type="text" onChange={props.handleHookBrand}/>
        </div>
        <div className="col-md-6">
            <label className="form-label">Material</label>
            <input className="form-control" type="text" onChange={props.handleHookMaterial}/>
        </div>
        <div className="col-md-6">
            <label className="form-label">Project</label>
            <input className="form-control" type="text" onChange={props.handleHookProject}/>
        </div>
        <div className="col-md-6">
            <label className="form-label">Notes</label>
            <input className="form-control" type="text" onChange={props.handleHookNotes}/>
        </div>
        <div className="col-md-6">
            <label className="form-label">Needle Style</label>
            <input className="form-control" type="text" onChange={props.handleHookStyle}/>
        </div>
        <div className="col-md-6">
            <label className="form-label">Needle Length</label>
            <input className="form-control" type="text" onChange={props.handleHookLong}/>
        </div>
        <div className="col-md-6">
            <label className="form-label">Needle Point</label>
            <input className="form-control" type="text" onChange={props.handleHookPoint}/>
        </div>
        <div className="col-md-12">
            <label className="form-label">Image URL</label>
            <input className="form-control" type="url" onChange={props.handleHookImage}/>
        </div>
        </div>
        <div>
        <div className="form-check form-check-inline ms-3">
            <label className="form-check-label">In Use</label>
            <input className="form-check-input" type="checkbox" onChange={props.handleHookInUse}/>
        </div>
        <div className="form-check form-check-inline ms-3">
            <label className="form-check-label">Favorite</label>
            <input className="form-check-input" type="checkbox" onChange={props.handleHookFavorite}/>
        </div>
        <div className="form-check form-check-inline ms-3">
            <label className="form-check-label">Ready to Replace</label>
            <input className="form-check-input" type="checkbox" onChange={props.handleHookReplace}/>
        </div>
        <div className="form-check form-check-inline ms-3">
            <label className="form-check-label">Complete Set</label>
            <input className="form-check-input" type="checkbox" onChange={props.handleHookComplete}/>
        </div>
        </div>
        <div className="col-12 m-3">
            <input className="btn btn-outline-success" type="submit" value="Add New Hook/Needle"/>
        </div>
      </form>
      </div>
      </>
    )
  }
  export default NewHook