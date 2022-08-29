const Yarn = (props) => {
  return(
    <>
    {props.yarn.map((yarn) => {
        return(
          <div key={yarn._id} className="card mx-1 mb-1" style={{width:"18rem"}}>
          <div className="col m-0 card-body" style={{width:"15rem"}}>
            <dt>Brand</dt><dd className='m-0'>&emsp;{yarn.brand}</dd>
            <dt>Name</dt><dd className='m-0'>&emsp;{yarn.name}</dd>
            <dt>Yarn Color</dt><dd className='m-0'>&emsp;{yarn.color}</dd>
            <dt>No. of yards</dt><dd className='m-0'>&emsp;{yarn.yards}</dd>
            <dt>Fiber</dt><dd className='m-0'>&emsp;{yarn.fiber}</dd>
            <dt>Yarn Weight</dt><dd className='m-0'>&emsp;{yarn.weight}</dd>
            <dt>Purchase Date</dt><dd className='m-0'>&emsp;{new Date(yarn.purchaseDate).toLocaleDateString()}</dd>
            <dt>No. of Skeins</dt><dd className='m-0'>&emsp;{yarn.skeins}</dd>
            <dt>Purchased At</dt><dd className='m-0'>&emsp;{yarn.store}</dd>
            <dt>Notes</dt><dd className='m-0'>&emsp;{yarn.note}</dd>
            <dt>Image Url</dt><dd className='m-0'>{yarn.image}</dd>
            <button className="btn btn-danger" onClick={(event) => {
              props.handleYarnDelete(yarn)
            }}>Delete</button>
          </div>
          </div>
        )
      })}
      </>
  )
}
export default Yarn