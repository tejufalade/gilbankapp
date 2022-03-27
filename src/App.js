import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Hero from './Components/Hero';
import Registration from './Components/Registration';
import Dashboard from './Components/Dashboard';
import TransferBetween from './Components/TransferBetween';

function App() {
  return (
    <div className='overflow-hidden'>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path='/register' element={<Registration/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/transfer' element={<TransferBetween/>}/>
    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
