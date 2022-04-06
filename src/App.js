import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Hero, Registration, Dashboard, SendLocal, TransferBetween, AbroadTransfers, TransactionHistory, Profile } from "./Components"

function App() {
  return (
    <div className='overflow-hidden'>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path='/register' element={<Registration/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/transfer' element={<TransferBetween/>}/>
      <Route path='/send-local' element={<SendLocal/>}/>
      <Route path='/international-transfer' element={<AbroadTransfers/>}/>
      <Route path='/history' element={<TransactionHistory/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
