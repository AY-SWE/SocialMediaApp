import React, {useState, useRef, useEffect} from 'react'
import "./PostShare.scss"
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch,useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../../actions/uploadActions';

const PostShare = () => {
    const loading = useSelector((state)=> state.postReducer.uploading)
    const dispatch = useDispatch();
    //const user = useSelector((state)=>{console.log(state.authReducer.authData.user.existingUser._id);return state.authReducer.authData;});    problem is too nested, that's why _id was undefined
    const user = useSelector((state)=> state.authReducer.authData.user.existingUser);  
    const[image, setImage] = useState(null);
    const imageRef = useRef();
    const description = useRef()
    const onImageChange =(e)=>{
        if(e.target.files && e.target.files[0]){
            let img = e.target.files[0];
            setImage(img);
        }
    };

    const resetAfterShare = ()=>{
        setImage(null);
        description.current.value=""
    }

const handleShare = (e) => {
    e.preventDefault();
    const newPost = {
        userId: user._id,
        description: description.current.value
    }
    if(image){
        const data = new FormData();
        const filename = Date.now() + image.name;
        data.append("name", filename)
        data.append("file", image)
        newPost.img = filename      //remember, Post model's img is of type String
        console.log("upload image below:")
        console.log(data)
        try{
            dispatch(uploadImage(data))
        }
        catch(err){
            console.log(err)
        }
    }
    dispatch(uploadPost(newPost))      //upload post contains the post's descrip,img,etc
    resetAfterShare()
}

  return (
    <div className="postShare">
        <img src="https://www.themarysue.com/wp-content/uploads/2022/05/Anya-smile.jpg" alt=''/>
    
        <div className='whatHappening'>
            <input required ref={description} type="text" placeholder="What is happening" />
        
            <div className="postOptions">
                <div className="option"
                style={{color: "var(--photo)"}}
                onClick ={()=> imageRef.current.click()}>
                    <AddPhotoAlternateOutlinedIcon/>
                    Photo
                </div>
                <div className="option"
                style={{color: "var(--video)"}}
                >
                    <VideoCameraBackOutlinedIcon/>
                    Video
                </div>
                <div className="option"
                style={{color: "var(--location)"}}>
                    <AddLocationOutlinedIcon/>
                    Location
                </div>
                <div className="option"
                style={{color: "var(--schedule)"}}>
                    <CalendarMonthOutlinedIcon/>
                    Schedule
                </div>

                <button className="button-postShare" onClick={handleShare} disabled={loading}>
                    {loading? "Uploading...": "Share"}
                </button>

                <div style={{display:"none"}}>
                    <input type="file" name= "myImage" ref={imageRef} onChange={onImageChange}/>
                </div>
            </div>

            {image && (
                <div className="previewImage">
                     <CloseIcon onClick={()=> setImage(null)}/>
                     <img src={URL.createObjectURL(image)} alt=""/>
                </div>  
            )}
        </div>
    </div>
  )
}

export default PostShare