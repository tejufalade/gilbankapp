import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Hero,
  Registration,
  Dashboard,
  SendLocal,
  TransferBetween,
  AbroadTransfers,
  TransactionHistory,
  Profile,
  Login
} from "./Components";
import ProtectedRoute from "./Layout/ProtectedRoutes";
import {AppContext} from "./Context/AppContext"

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [ user, setUser ] = useState({})
  return (
    <div className="overflow-hidden">
      <AppContext.Provider value={{user, setUser, }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/register" element={<Registration auth={setIsAuth} />} />
          <Route path="/login" element={<Login auth={setIsAuth} />} />
          <Route element={<ProtectedRoute isAuth={isAuth} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transfer" element={<TransferBetween />} />
            <Route path="/send-local" element={<SendLocal />} />
            <Route
              path="/international-transfer"
              element={<AbroadTransfers />}
            />
            <Route path="/history" element={<TransactionHistory />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </AppContext.Provider>
     
    </div>
  );
}

export default App;
