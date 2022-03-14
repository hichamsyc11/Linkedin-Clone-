import './App.css';
import './css/header.css'
import Navbar  from './components/header/Navbar';
import SidBare from './components/sections/sidBare';
import Home from './components/sections/home';

function App() {
  return (
    <div className="App">
   
     <Navbar />
     <div className='heading_bar'> 
      <SidBare />
      <Home />

      
     </div>
    </div>
  );
}

export default App;
