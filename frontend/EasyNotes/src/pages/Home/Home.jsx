import React, {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Notecard from '../../components/Cards/Notecard'
import { MdAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes';
import Modal from 'react-modal';

const Home = () => {

  const [openAddEditModal, setOPenAddEditModal] =useState({
    isShow: false,
    type:"add",
    date: null,
  });
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
      </div>
    </div>

    <button className="w-14 h-16 flex items-center justify-center rounded-2xl bg-primary hover:gb-blue-600 absolute right-10 bottom-10" 
            onClick={() => {
              setOPenAddEditModal({ isShow:true, type: "add", date:null });
            }}>
      <MdAdd className="text-[32px] text-white"/>
    </button>

    <Modal 
    isOpen={openAddEditModal.isShow}
    onRequestCLose ={() => {}}
    style={{
      overlay: {
        backgroundColor: 'rgba(0,0,0,0.2)',
      },
      }}
    contentLabel=""
    className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-auto"
    >
    <AddEditNotes/>
    </Modal>
    </>
  )
};

export default Home
