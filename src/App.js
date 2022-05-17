import './App.css';
import './css/header.css'
import Navbar  from './components/header/Navbar';
import SidBare from './components/sections/sidBare';
import Home from './components/sections/home';
import SideRight from './components/sections/sideRight';

function App() {
  return (
    <div className="App">
   
     <Navbar />
    
     <div className='heading_bar'> 
      <SidBare />
      <Home />
      <SideRight />
      
     </div>
    </div>
  );
}

export default App;
