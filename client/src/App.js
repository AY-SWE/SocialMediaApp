
import './App.scss';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Auth from './pages/auth/Auth';
import {Route, Routes, Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

/*
    This is our application's top-level component.
    
    @author Andy Yang
*/
/*
  This is the entry-point for our application. Many different home pages
  
  @author Andy Yang
*/

const App = () => {
  const {user} = useSelector((state)=>state.authReducer.authData|| {})  //adding || {} fixes the "user not destrucutred" error 
  return (
    <div className="App">
          <div className='blur' style = {{top: '-18%', right: '0'}}></div>
        <div className='blur' style = {{top: '35%', left: '-8rem'}}></div>
        <Routes>
          <Route exact path="/" element={user? <Navigate to="home"/>: <Navigate to="auth"/>}/>  
          <Route path="/home" element={user? <Home/>: <Navigate to="../auth"/>}/>
          <Route path="/auth" element={user? <Navigate to="../home"/>:<Auth/>}/>
        </Routes>  

    </div>
        
  ); 
}

export default App;
