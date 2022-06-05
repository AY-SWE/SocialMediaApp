
import './App.scss';
import Home from './pages/home/Home';
function App() {
  return (
    <div className="App">
      <div className='blur' style = {{top: '-18%', right: '0'}}></div>
      <div className='blur' style = {{top: '35%', left: '-8rem'}}></div>
      <Home/>
    </div>
  ); 
}

export default App;
