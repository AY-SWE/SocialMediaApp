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
        case "UPDATING_SUCCESS": {
            localStorage.setItem("profile", JSON.stringify({...action?.data}));     //?. is a chain operator
            return {...state, authData: action.data, error:false, updateLoading: false};
        }
        case "UPDATING_FAILED": {
            return {...state, error:true, updateLoading:false}
        }

        default:
            return state
    }
}
export default authReducer