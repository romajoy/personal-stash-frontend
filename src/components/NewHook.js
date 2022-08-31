const NewHook = (props) => {

    
    return(
      <>
      <div className="my-3 border yarn-form" style={{backgroundColor:`${props.borderColor()}`}}>
      <h1>Add Hook/Needle to Stash</h1>
      <form className=" mt-3" onSubmit={props.handleNewHookSubmit}>
        <div className="row">
        <div className="col-md-6">
            <label className="form-label">Hook/Needle Size</label>
            <select className="form-select" onChange={props.handleHookSize}>
                <option>1.5mm / US 0</option>
                <option>1.75mm / US 0</option>
                <option>2.0mm / US 0</option>
                <option>2.25mm / US 1 / B</option>
                <option>2.5mm</option>
                <option>2.75mm / US 2 / C</option>
                <option>3.0mm</option>
                <option>3.25mm / US 3 / D</option>
                <option>3.5mm / US 4 / E</option>
                <option>3.75mm / US 5 / F</option>
                <option>4.0mm / US 6 / G</option>
                <option>4.25mm</option>
                <option>4.5mm / US 7</option>
                <option>5.0mm / US 8 / H</option>
                <option>5.5mm / US 9 / I</option>
                <option>5.75mm</option>
                <option>6.0mm / US 10 / J</option>
                <option>6.5mm / US 10.5 / K</option>
                <option>7.0mm</option>
                <option>7.5mm</option>
                <option>8.0mm / US 11 / L</option>
                <option>9.0mm / US 13 / M</option>
                <option>10mm / US 15 / N</option>
                <option>12mm / US 17 / P</option>
                <option>16mm / US 19 / Q</option>
                <option>19mm / US 25 / S</option>
                <option>25mm / US 50 </option>
            </select>
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
            <select className="form-select" onChange={props.handleHookStyle}>
                <option ></option>
                <option >Straight</option>
                <option >Circular</option>
                <option>DPN(Double Pointed Needles)</option>
                <option>Interchangable</option>
                <option>Cable</option>
            </select>
        </div>
        <div className="col-md-6">
            <label className="form-label">Needle Length</label>
            <input className="form-control" type="text" onChange={props.handleHookLong}/>
        </div>
        <div className="col-md-6">
            <label className="form-label">Needle Point</label>
            <select className="form-select" onChange={props.handleHookPoint}>
                <option ></option>
                <option >Sharp</option>
                <option >Dull</option>
            </select>
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