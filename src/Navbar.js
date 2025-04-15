import React, { useState } from 'react'

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)
    function handleNav(){
       setNavOpen((navOpen)=> !navOpen) 
    }
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>devARcoder</h1>
        <p onClick={handleNav}>{navOpen ? "Close" : "Menu"}</p>

      </div>
      {navOpen && <div className={`sidebar flex flex-col justify-center items-center space-y-6 md:flex md:flex-row md:justify-between md:items-center`}>

        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>}
      {navOpen ? "" : <h1 className='text-center'>welcome</h1>}

    </div>
  )
}

export default Navbar
