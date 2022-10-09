import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
        <div className="navigation">
      <div className='navitem  active'>
        <div className='navtext'>Dashboard</div>
      </div>
      <div className='navitem'>
        <div className='navtext'>Books</div>
      </div>
      <div className='navitem'>
        <div className='navtext '>Food</div>
      </div>
      </div>
      <div className='uid'>
        <div className='navtext'>20BCS9474</div>
      </div>
    </div>
  )
}

export default Navbar