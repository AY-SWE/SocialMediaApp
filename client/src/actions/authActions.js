import * as authApi from "../api/authRequestApi"

export const loginUser = (formData) => async(dispatch)=> {
    dispatch({type: "AUTH_STARTED"})
   try{
    const {data} = await authApi.loginUser(formData)
    dispatch({type: "AUTH_SUCCESS", data: data})
   }
   catch(err){
        dispatch({type: "AUTH_FAILED"})
   }
}

