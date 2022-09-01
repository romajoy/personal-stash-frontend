const Hook = (props) => {


    
    return(
      <>
      {props.hook.map((hook) => {
          return(
            <div key={hook._id} className="card" style={{border:`3px solid ${props.borderColor()}`, backgroundColor:`${props.borderColor()}`}}> 
            <div className="img-div align-self-center"></div>
            <div className="yarn-content-div">
            <div  className="content">
             
              <dt>Hook Size</dt><dd className='m-0'>&emsp;{hook.size}</dd>
              <dt>Brand</dt><dd className='m-0'>&emsp;{hook.brand}</dd>
              <dt>Material</dt><dd className='m-0'>&emsp;{hook.material}</dd>
              <dt>Currently</dt><dd className='m-0 change-text'>&emsp;{hook.inUse ? "In Use" : "Not In Use"}</dd>
              <dt>Project</dt><dd className='m-0'>&emsp;{hook.project}</dd>
              <dt>Notes</dt><dd className='m-0'>&emsp;{hook.notes}</dd>
              </div> 
              <div className="content1">
              <dt>Favorite</dt><dd className='m-0 change-text'>&emsp;{hook.favorite ? "Favorite Hook" : "Not Favorite"}</dd>
              <dt>State of Hook</dt><dd className='m-0 change-text'>&emsp;{hook.replace ? "Replace Soon" : "Still in Good Shape"}</dd>
              <dt>Needle Style</dt><dd className='m-0'>&emsp;{hook.style}</dd>
              <dt>Needle Length</dt><dd className='m-0'>&emsp;{hook.long}</dd>
              <dt>Needle Point</dt><dd className='m-0'>&emsp;{hook.point}</dd>
              <dt>Set Complete?</dt><dd className='m-0 change-text'>&emsp;{hook.completeSet ? "Complete Set" : "Incomplete Set"}</dd>
              
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#exampleModal"+hook._id}>
                Edit
              </button>

              <div className="modal fade" id={"exampleModal"+hook._id} key={hook._id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content modal-text">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Edit Entry Form</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <div className="col-md-6">
                        <label className="form-label">Hook Size</label>
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
                        <input className="form-control" type="text" defaultValue={hook.brand} onChange={props.handleHookBrand}/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Material</label>
                        <input className="form-control" type="text" defaultValue={hook.material} onChange={props.handleHookMaterial}/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Project</label>
                        <input className="form-control" type="text" defaultValue={hook.project} onChange={props.handleHookProject}/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Notes</label>
                        <input className="form-control" type="text" defaultValue={hook.notes} onChange={props.handleHookNotes}/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Needle Style</label>
                        <select className="form-select" onChange={props.handleHookStyle}>
                            <option >Straight</option>
                            <option >Circular</option>
                            <option>Double Pointed Needles</option>
                            <option>Interchangable</option>
                            <option>Cable</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Needle Length</label>
                        <input className="form-control" type="text" defaultValue={hook.long} onChange={props.handleHookLong}/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Needle Point</label>
                        <select className="form-select" onChange={props.handleHookPoint}>
                            <option >Sharp</option>
                            <option >Dull</option>
                        </select>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Image URL</label>
                        <input className="form-control" type="url" defaultValue={hook.image} onChange={props.handleHookImage}/>
                    </div>
                    <div>
                    <div className="form-check form-check-inline ms-3">
                        <label className="form-check-label">In Use</label>
                        <input className="form-check-input" type="checkbox" defaultChecked={hook.inUse} onChange={props.handleHookInUse}/>
                    </div>
                    <div className="form-check form-check-inline ms-3">
                        <label className="form-check-label">Favorite</label>
                        <input className="form-check-input" type="checkbox" defaultChecked={hook.favorite} onChange={props.handleHookFavorite}/>
                    </div>
                    <div className="form-check form-check-inline ms-3">
                        <label className="form-check-label">Ready to Replace</label>
                        <input className="form-check-input" type="checkbox" defaultChecked={hook.replace} onChange={props.handleHookReplace}/>
                    </div>
                    <div className="form-check form-check-inline ms-3">
                        <label className="form-check-label">Complete Set</label>
                        <input className="form-check-input" type="checkbox" defaultChecked={hook.completeSet} onChange={props.handleHookComplete}/>
                    </div>
                    </div>
                    
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={(event) => {
                        props.handleHookUpdate(hook)
                      }}>Save changes</button>
                    </div>
                  </div>
                </div>
              </div>

              <button className="btn btn-danger" onClick={(event) => {
              props.handleHookDelete(hook)
            }}>Delete</button>
              </div>
              </div>
            </div>
          )
        })}
        </>
    )
  }
  export default Hook