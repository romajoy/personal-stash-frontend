const Yarn = (props) => {
  return(
    <>
    {props.yarn.map((yarn) => {
        return(
          <div key={yarn._id} className="row m-0 border" style={{width:"15rem"}}>
            <dt>Brand</dt><dd className='m-0'>&emsp;{yarn.brand}</dd>
            <dt>Name</dt><dd className='m-0'>&emsp;{yarn.name}</dd>
            <dt>Yarn Color</dt><dd className='m-0'>&emsp;{yarn.color}</dd>
            <dt>No. of yards</dt><dd className='m-0'>&emsp;{yarn.yards}</dd>
            <dt>Yarn Weight</dt><dd className='m-0'>&emsp;{yarn.weight}</dd>
            <dt>Purchase Date</dt><dd className='m-0'>&emsp;{new Date(yarn.purchaseDate).toLocaleDateString()}</dd>
            <dt>No. of Skeins</dt><dd className='m-0'>&emsp;{yarn.skeins}</dd>
            <dt>Purchased At</dt><dd className='m-0'>&emsp;{yarn.store}</dd>
            <dt>Notes</dt><dd className='m-0'>&emsp;{yarn.note}</dd>
          </div>
        )
      })}
      </>
  )
}
export default Yarn