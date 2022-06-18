import { Modal} from '@mantine/core';
import "./EditInfoModal.scss"
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../actions/uploadActions';
import { updateUser } from '../../actions/userActions';

function EditInfoModal({modalOpened, setModalOpened, data}) {   //data is {user} passed from InfoCard
 
  const {password, ...otherInfo} = data;
  const [formData, setformData] = useState(otherInfo);
  const [profileImg, setprofileImg] = useState(null);
  const [coverImg, setcoverImg] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();
  const user = useSelector((state)=>state.authReducer.authData.user.existingUser);
  const handleChange = (e) => {
    setformData({...formData, [e.target.name]:  e.target.value})
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    let userData = formData;
    if(profileImg){ //if there exist profileImg along with the other info to update
      const data = new FormData();
      const filename = Date.now() + profileImg.name;
      data.append("name", filename)
      data.append("file", profileImg)
      userData.profilePic = filename ;     //remember, Post model's img is of type String
      console.log("update profile pic below:")
      //console.log(data)
      try{
          dispatch(uploadImage(data))
      }
      catch(err){
          console.log(err)
      }
    }

    if(coverImg){ //if there exist profileImg along with the other info to update
      const data = new FormData();
      const filename = Date.now() + coverImg.name;
      data.append("name", filename)
      data.append("file", coverImg)
      userData.coverPic = filename ;     //remember, Post model's img is of type String
      console.log("update cover pic below:")
      //console.log(data)
      try{
          dispatch(uploadImage(data))
      }
      catch(err){
          console.log(err)
      }
    }
    dispatch(updateUser(param.id, userData));
    setModalOpened(false);    //after updating, close modal
  }

  const handleImgChange = (e) => {
    if(e.target.files && e.target.files[0]){
      let img = e.target.files[0];
      e.target.name === "coverPic"? setcoverImg(img): setprofileImg(img);
     }
  }


  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        size="55%"
      >
        <form className='editInfoForm'>
            <h3>Edit Your Info</h3>

            <div>
              <input type="text" className='editInfoInput' name='firstname' placeholder='First Name' onChange={handleChange} value={formData.firstname}/>
              <input type="text" className='editInfoInput' name='lastname' placeholder='Last Name' onChange={handleChange} value={formData.lastname}/>
            </div>
            <div>
              <input type="text" className='editInfoInput' name='worksAt' placeholder='Works At' onChange={handleChange} value={formData.worksAt}/>
            </div>
            <div>
              <input type="text" className='editInfoInput' name='livesIn' placeholder='Lives In' onChange={handleChange} value={formData.livesIn}/>
              <input type="text" className='editInfoInput' name='country' placeholder='Country' onChange={handleChange} value={formData.country}/>
            </div>
            <div>
              <input type="text" className='editInfoInput' name='relationship' placeholder='Relationship Status' onChange={handleChange} value={formData.relationship}/>
            </div>

            <div>
              Profile Image
              <input type="file" name="profilePic" onChange={handleImgChange}/>
              Cover Image
              <input type="file" name="coverPic" onChange={handleImgChange}/>
            </div>

            <button className="editInfoSaveButton" onClick={handleUpdate}>
              Update
            </button>
        </form>
      </Modal>
    </>
  );
}

export default EditInfoModal

