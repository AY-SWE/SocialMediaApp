import * as userApi from "../api/userRequestApi"

export const updateUser = (id, formData) => async(dispatch)=> {
    dispatch({type: "UPDATING_STARTED"})
    try{
         const {updatedUser} = await userApi.updateUser(id, formData)
         dispatch({type: "UPDATING_SUCCESS", data: updatedUser})
    }
    catch(err){
         console.log(err);
         dispatch({type: "UPDATING_FAILED"})
    }
 }