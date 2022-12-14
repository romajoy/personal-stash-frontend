import moment from "moment"

const Yarn = (props) => {
  
  return(
    <>
    {props.yarn.map((yarn) => {
        return(
          <div key={yarn._id} className="card" style={{border:`3px solid ${props.borderColor()}`, backgroundColor:`${props.borderColor()}`}}>
            <div className="yarn-img-div" style={{backgroundImage:`url(${yarn.image})`}}>
              
            </div>
            <div className="yarn-content-div">
          <div className="yarn-content">
            <dt>Brand</dt><dd className='m-0'>&emsp;{yarn.brand}</dd>
            <dt>Name</dt><dd className='m-0'>&emsp;{yarn.name}</dd>
            <dt>Yarn Color</dt><dd className='m-0'>&emsp;{yarn.color}</dd>
            <dt>No. of yards</dt><dd className='m-0'>&emsp;{yarn.yards}</dd>
            <dt>Notes</dt><dd className='m-0'>&emsp;{yarn.note}</dd>
            </div>
            <div className="yarn-content1">
            <dt>Fiber</dt><dd className='m-0'>&emsp;{yarn.fiber}</dd>
            <dt>No. of Skeins</dt><dd className='m-0'>&emsp;{yarn.skeins}</dd>
            <dt>Yarn Weight</dt><dd className='m-0'>&emsp;{yarn.weight}</dd>
            <dt>Purchase Date</dt><dd className='m-0'>{moment.utc(yarn.purchaseDate).format("MM/DD/YYYY")}</dd>
            <dt>Purchased From</dt><dd className='m-0'>&emsp;{yarn.store}</dd>
            

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#exampleModal"+yarn._id}>
              Edit
            </button>

            <div className="modal fade" id={"exampleModal"+yarn._id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content modal-text">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit Entry Form</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  <div className="col-md-12">
                      <label className="form-label">Yarn Brand</label>
                      <input className="form-control" type="text" defaultValue={yarn.brand} onChange={props.handleYarnBrand}/>
                  </div>
                  <div className="col-md-12">
                      <label className="form-label">Name</label>
                      <input className="form-control" type="text" defaultValue={yarn.name} onChange={props.handleYarnName}/>
                  </div>
                  <div className="col-md-12">
                      <label className="form-label">Color of Yarn</label>
                      <input className="form-control" type="text" defaultValue={yarn.color} onChange={props.handleYarnColor}/>
                  </div>
                  <div className="col-md-12">
                      <label className="form-label">No. of Yards</label>
                      <input className="form-control" type="number" defaultValue={yarn.yards} onChange={props.handleYarnYards}/>
                  </div>
                  <div className="col-md-12">
                      <label className="form-label">Yarn Fiber</label>
                      <input className="form-control" type="text" defaultValue={yarn.fiber} onChange={props.handleYarnFiber}/>
                  </div>
                  <div className="col-md-12">
                      <label className="form-label">Yarn Weight</label>
                      <select className="form-select" onChange={props.handleYarnWeight}>
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
                  <div className="col-md-12">
                      <label className="form-label">Date of Purchase</label>
                      <input className="form-control" type="date" defaultValue={yarn.purchaseDate} onChange={props.handleYarnPurchase}/>
                  </div>
                  <div className="col-md-12">
                      <label className="form-label">No. of Available Skeins </label>
                      <input className="form-control" type="number" defaultValue={yarn.skeins} onChange={props.handleYarnSkeins}/>
                  </div>
                  <div className="col-md-12">
                      <label className="form-label">Purchase Location</label>
                      <input className="form-control" type="text" defaultValue={yarn.store} onChange={props.handleYarnStore}/>
                  </div>
                  <div className="col-md-12">
                      <label className="form-label">Notes</label>
                      <textarea className="form-control" type="text" defaultValue={yarn.note} onChange={props.handleYarnNote}/>
                  </div>
                  <div className="col-md-12">
                      <label className="form-label">Image URL</label>
                      <textarea className="form-control" type="url" defaultValue={yarn.image} onChange={props.handleYarnImage}/>
                  </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={(event) => {
                      props.handleYarnUpdate(yarn)
                    }}>Save changes</button>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn btn-danger" onClick={(event) => {
              props.handleYarnDelete(yarn)
            }}>Delete</button>
          </div>
          </div>
          </div>
        )
      })}
      </>
  )
}
export default Yarn