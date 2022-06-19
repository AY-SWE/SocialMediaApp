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

 export const followUser = (id, formData) => async(dispatch)=> {
    dispatch({type: "FOLLOW_USER"})
    await userApi.followUser(id, formData);
}

export const unfollowUser = (id, formData) => async(dispatch)=> {
    dispatch({type: "UNFOLLOW_USER"})
    await userApi.unfollowUser(id, formData);
}
 