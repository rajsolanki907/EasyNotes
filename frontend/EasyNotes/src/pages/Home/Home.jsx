import React, {useEffect, useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Notecard from '../../components/Cards/Notecard'
import { MdAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes';
import Modal from 'react-modal';
import { useNavigate} from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import Toast from '../../components/ToastMessage/Toast';
import EmptyCard from '../../components/EmptyCard/EmptyCard';
import AddNotesImg from '../../assets/images/add-notes.svg';


const Home = () => {

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShow: false,
    type:"add",
    date: null,
  });

  const [showToastMsg, setShowToastMsg] = useState({
    isShow: false,
    message: "",
    type: "add",
  });

  const [allNotes, setAllNotes] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  const handleEdit = (noteDetails) => {
    setOpenAddEditModal({ isShow: true, data: noteDetails, type: "edit" });
  };

  const showToastMessage = (message, type) => {
    setShowToastMsg({
      isShow: true,
      message,
      type, 
    });
  };

  const handleCloseToast = () => {
    setShowToastMsg({
      isShow: false,
      message: "",
    });
  };

  //Get User Info
  const getUserInfo = async () =>{
    try {
        const response = await axiosInstance.get("/get-user");
        if (response.data && response.data.user) {
          setUserInfo(response.data.user);
        }
    } catch (error) {
      if(error.response && error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  //get All Notes
  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get("/get-all-notes");
      if (response.data && response.data.notes) {
        setAllNotes(response.data.notes);
      }
    } catch (error) {
      console.log("An unexpected error occured while fetching notes");
    }
  };

  //Delete Notes
  const deleteNote = async (data) => {
    const noteId = data._id;
    try {
      const response = await axiosInstance.delete("/delete-note/" + noteId);

      if(response.data && !response.data.error) {
        showToastMessage("Note Deleted Successfully", 'delete')
        getAllNotes();
        onClose()
      }
    }catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        console.log("An unexpected error occured while fetching notes");  
      }
    }
  }

  useEffect(() => {
    getAllNotes();
    getUserInfo();
    return () => {}
  }, [] );

  return (
    <>
    <Navbar userInfo={userInfo}/>
    <div className="container mx-auto">
      {allNotes.length > 0 ? (<div className="grid grid-cols-3 gap-4 mt-8">
        {allNotes.map((item, index) => (
            <Notecard 
            key={item._id}
            title={item.title} 
            date={item.createdOn} 
            content = {item.content}
            tags={item.tags}
            isPinned={item.isPinned}
            onEdit={()=> handleEdit(item)}
            onDelete={()=> deleteNote(item)}
            onPinNote={()=>{}}
            />
        ))}
      </div>
      ): ( <EmptyCard imgSrc={AddNotesImg} 
        message={`Start creating your first note! Click the 'Add' button to write down your
         thoughts, ideas, and reminders. Lets get Started!`}/>
      )}
    </div>

    <button className="w-14 h-16 flex items-center justify-center rounded-2xl bg-primary hover:gb-blue-600 absolute right-10 bottom-10" 
            onClick={() => {
              setOpenAddEditModal({ isShow:true, type: "add", date:null });
            }}>
      <MdAdd className="text-[32px] text-white"/>
    </button>

    <Modal 
    isOpen={openAddEditModal.isShow}
    onRequestClose ={() => {}}
    style={{
      overlay: {
        backgroundColor: 'rgba(0,0,0,0.2)',
      },
      }}
    contentLabel=""
    className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-auto"
    >
    <AddEditNotes
    type={openAddEditModal.type}
    noteData={openAddEditModal.data}
    onClose={() => {
      setOpenAddEditModal({ isShown: false, type: "add", data: null})
    }}
    getAllNotes= {getAllNotes}
    showToastMessage={showToastMessage}
    />
    </Modal>

    <Toast
    isShow={showToastMsg.isShow}
    message={showToastMsg.message}
    type={showToastMsg.type}
    onClose={handleCloseToast}
    />
    </>
  )
};

export default Home
