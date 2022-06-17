import * as uploadApi from "../api/uploadRequestApi"

export const uploadImage = (data) => async(dispatch)=> {
   try{
        await uploadApi.uploadImage(data)
   }
   catch(err){
        console.log(err);
   }
}

