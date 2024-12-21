import React from 'react'
import Item from './Item.jsx'
function Wishlist() {
  return (
    <>
    <div className="container">
      <div className="row bg-danger">
        <div className="col-3 fs-3">Product Name</div>
     
        <div className="col-3 fs-3">date </div>
        <div className="col-3 fs-3">Confirmation</div>
      </div>
    </div>
    <Item/>
    </>
  )
}

export default Wishlist