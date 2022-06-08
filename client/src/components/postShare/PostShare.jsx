import React, {useState, useRef} from 'react'
import "./PostShare.scss"
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CloseIcon from '@mui/icons-material/Close';

const PostShare = () => {
    const[image, setImage] = useState(null);
    const imageRef = useRef();
    const onImageChange =(e)=>{
        if(e.target.files && e.target.files[0]){
            let img = e.target.files[0];
            setImage({
                image: URL.createObjectURL(img)
            });
        }
    };
 

  return (
    <div className="postShare">
        <img src="https://www.themarysue.com/wp-content/uploads/2022/05/Anya-smile.jpg" alt=''/>
    
        <div className='whatHappening'>
            <input type="text" placeholder="What is happening" />
        
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

                <button className="button-postShare">
                    Share
                </button>

                <div style={{display:"none"}}>
                    <input type="file" name= "myImage" ref={imageRef} onChange={onImageChange}/>
                </div>
            </div>

            {image && (
                <div className="previewImage">
                     <CloseIcon onClick={()=> setImage(null)}/>
                     <img src={image.image} alt=""/>
                </div>  
            )}
        </div>
    </div>
  )
}

export default PostShare