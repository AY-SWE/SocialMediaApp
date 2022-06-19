const authReducer = (state= {authData: null, loading:false, error:false, updateLoading: false} , action) => {
    switch (action.type) {
        case "AUTH_STARTED": {
            return {...state, loading: true, error:false}
        }
        case "AUTH_SUCCESS": {
            localStorage.setItem("profile", JSON.stringify({...action?.data}));
            return {...state, authData: action.data, loading: false, error:false};
        }
        case "AUTH_FAILED": {
            return {...state, loading: false, error:true}
        }
        case "AUTH_LOGOUT":{
            localStorage.clear();
            return {...state, authData: null, loading: false, error:true}
        }
    
        case "UPDATING_STARTED": {  
            return {...state, error:false, updateLoading: true}
        }
        case "UPDATE_SUCCESS": {
            localStorage.setItem("profile", JSON.stringify({...action?.data}))     //?. is a chain operator
            return {...state, authData: action.data, error:false, updateLoading: false};
        }
        case "UPDATING_FAILED": {
            return {...state, error:true, updateLoading:false}
        }
        case "FOLLOW_USER": {
            const userInfo = state.authData.user[Object.keys(state.authData.user)[0]];
            //console.log(userInfo)
            //return {...state, authData: {...state.authData, user:{...state.authData.user, followings:[...state.authData.user.followings, action.data]}}};     //action.data contains the new user that we want to follow
            //return {...state, authData: {...userInfo, followings:[userInfo.followings, action.data]}};    
            return {...state, authData: {...state.authData, user:{userInfo, followings:[userInfo.followings, action.data]}}};       //my version
       
        }
        case "UNFOLLOW_USER": {
            const userInfo = state.authData.user[Object.keys(state.authData.user)[0]];
           // return {...state, authData: {...state.authData, user:{...state.authData.user, following:[...state.authData.user.following.filter((personId)=>personId !== action.data), action.data]}}};        //filter basically means that we take out the person we clicked out of our(currently logged in user's followings array)
           return {...state, authData: {...state.authData, user:{userInfo, followings:[userInfo.followings.filter((personId)=>personId !== action.data), action.data]}}};       //my version
       
        }

        default:
            return state
    }
}
export default authReducer