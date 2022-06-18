import * as userApi from "../api/userRequestApi"

export const updateUser = (id, formData) => async(dispatch)=> {
    dispatch({type: "UPDATING_STARTED"})
    try{
         const {data} = await userApi.updateUser(id, formData);
         console.log("USER ACTIONS :  ",data)
         dispatch({type: "UPDATE_SUCCESS", data: data})
    }
    catch(err){
         console.log(err);
         dispatch({type: "UPDATING_FAILED"})
    }
 }