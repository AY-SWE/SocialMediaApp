const authReducer = (state= {authData: null, loading:false, error:false} , action) => {
    switch (action.type) {
        case "AUTH_STARTED": {
            return {...state, loading: true, error:false}
        }
        case "AUTH_SUCCESS": {
            localStorage.setItem("profile", JSON.stringify({...action?.data}))
            return {...state, authData: action.data, loading: false, error:false}
        }
        case "AUTH_FAILED": {
            return {...state, loading: false, error:true}
        }
        default:
            return state
    }
}
export default authReducer