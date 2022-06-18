import * as authApi from "../api/authRequestApi"

export const loginUser = (formData, navigate) => async(dispatch)=> {
    dispatch({type: "AUTH_STARTED"})
   try{
    const {data} = await authApi.loginUser(formData)
    dispatch({type: "AUTH_SUCCESS", data: data})
    navigate("../home",{replace:true})
   }
   catch(err){
        dispatch({type: "AUTH_FAILED"})
   }
}

export const registerUser = (formData, navigate) => async(dispatch)=> {
    dispatch({type: "AUTH_STARTED"})
   try{
    const {data} = await authApi.registerUser(formData)
    dispatch({type: "AUTH_SUCCESS", data: data})
    navigate("../home", { replace: true });
   }
   catch(err){
        console.log(err);
        dispatch({type: "AUTH_FAILED"})
   }
}

export const logoutUser = () => async(dispatch)=> {
     dispatch({type: "AUTH_LOGOUT"})
 }

