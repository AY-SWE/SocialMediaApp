const postReducer = (state= {posts: [], loading:false, uploading: false, error:false} , action) => {
    switch (action.type) {
        case "UPLOAD_STARTED": {
            return {...state, uploading: true, error:false}       //...state is previous state
        }
        case "UPLOAD_SUCCESS": {
            localStorage.setItem("profile", JSON.stringify({...action?.data}));
            return {...state, posts: [action.data, ...state.posts], uploading: false, error:false};
        }
        case "UPLOAD_FAILED": {
            return {...state, uploading: false, error:true}
        }
        default:
            return state        //default return previous state
    }
}
export default postReducer