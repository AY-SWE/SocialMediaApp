import * as uploadApi from "../api/uploadRequestApi"

export const uploadImage = (data) => async(dispatch)=> {
   try{
        await uploadApi.uploadImage(data)
   }
   catch(err){
        console.log(err);
   }
}

export const uploadPost = (data) => async(dispatch)=> {
     dispatch({type: "UPLOAD_STARTED"})
     try{
          const newPost = await uploadApi.uploadPost(data)
          dispatch({type: "UPLOAD_SUCCESS", data: newPost.data})
     }
     catch(err){
          console.log(err);
          dispatch({type: "UPLOAD_FAILED"})
     }
  }

