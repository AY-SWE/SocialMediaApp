import * as postApi from "../api/postRequestApi"

export const getTimelinePost = (id) => async(dispatch)=> {
    dispatch({type: "RETRIEVE_STARTED"})
    try{
         const {getPost} = await postApi.getTimelinePost(id)
         dispatch({type: "RETRIEVE_SUCCESS", data: getPost})
    }
    catch(err){
         console.log(err);
         dispatch({type: "RETRIEVE_FAILED"})
    }
 }