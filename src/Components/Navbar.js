import React, { useState } from 'react'
import SearchBar from './SearchBar';
import '../App.css'



function Navbar() {
  const [hide,setHide] = useState(false);
  return (

   <nav class="px-6 py-4 bg-black flex-1 h-16 fixed w-full shadow-2xl nav">
    {hide === true ? <SearchBar setHide={setHide} /> :
    <div class="flex justify-between items-center ">

        <div class="flex items-center">
    <img src="Back.png" alt="back" class="h-4 w-4 mr-4" />
    <h3 class="text-white text-2xl">
        Romantic Comedy
    </h3>
    </div>
    
    
    <div onClick={()=>setHide(true)}>
        <img src="search.png" alt="search" class="h-5 w-5"  />
    </div>
    
    </div>}
    </nav>
    
    
  )
}

export default Navbar