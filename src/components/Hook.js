const Hook = (props) => {

    
    return(
      <>
      {props.hook.map((hook) => {
          return(
            <div className="card mx-1 mb-1" style={{width:"18rem"}}>
            <div key={hook._id} className="col m-0 card-body" style={{width:"15rem"}}>
              <dt>Hook Size</dt><dd className='m-0'>&emsp;{hook.size}</dd>
              <dt>Brand</dt><dd className='m-0'>&emsp;{hook.brand}</dd>
              <dt>Material</dt><dd className='m-0'>&emsp;{hook.material}</dd>
              <dt>Currently</dt><dd className='m-0'>&emsp;{hook.inUse ? "In Use" : "Not In Use"}</dd>
              <dt>Project</dt><dd className='m-0'>&emsp;{hook.project}</dd>
              <dt>Notes</dt><dd className='m-0'>&emsp;{hook.notes}</dd>
              <dt>Favorite</dt><dd className='m-0'>&emsp;{hook.favorite ? "Favorite Hook" : "Not Favorite"}</dd>
              <dt>State of Hook</dt><dd className='m-0'>&emsp;{hook.replace ? "Replace Soon" : "Still in Good Shape"}</dd>
              <dt>Needle Style</dt><dd className='m-0'>&emsp;{hook.style}</dd>
              <dt>Needle Length</dt><dd className='m-0'>&emsp;{hook.long}</dd>
              <dt>Needle Point</dt><dd className='m-0'>&emsp;{hook.point}</dd>
              <dt>Set Complete?</dt><dd className='m-0'>&emsp;{hook.completeSet ? "Complete Set" : "Incomplete Set"}</dd>
              <button className="btn btn-danger" onClick={(event) => {
              props.handleHookDelete(hook)
            }}>Delete</button>
              </div>
            </div>
          )
        })}
        </>
    )
  }
  export default Hook