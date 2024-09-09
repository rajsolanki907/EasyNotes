import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Notecard from '../../components/Cards/Notecard'

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4 mt-8">
      <Notecard 
      title="Meeting on Monday Morning" 
      date={"10 August 2024"} 
      content = "Meeting on Monday 11 august"
      tags="#Meeting"
      isPinned={true}
      onEdit={()=>{}}
      onDelete={()=>{}}
      onPinNote={()=>{}}
      />
      <Notecard 
      title="Meeting on Monday Morning" 
      date={"10 August 2024"} 
      content = "Meeting on Monday 11 august"
      tags="#Meeting"
      isPinned={true}
      onEdit={()=>{}}
      onDelete={()=>{}}
      onPinNote={()=>{}}
      />
      <Notecard 
      title="Meeting on Monday Morning" 
      date={"10 August 2024"} 
      content = "Meeting on Monday 11 august"
      tags="#Meeting"
      isPinned={true}
      onEdit={()=>{}}
      onDelete={()=>{}}
      onPinNote={()=>{}}
      />
      </div>
    </div>
    </>
  )
}

export default Home
