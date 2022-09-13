import React from 'react'
import Navbar from '../Components/Navbar'
import Posters from '../Components/Posters'


function HomePage() {
  return (
    <div>
     <Navbar/>

     <div class="flex justify-center">
     <Posters/>
     </div>
    </div>
  )
}

export default HomePage