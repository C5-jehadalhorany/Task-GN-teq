import './App.css';
import Login from "./components/Login";
import Alluser from './components/User';
import CollapsibleExample from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Adduser from './components/Add';
function App() {
  return (
    <div className="App">
      <CollapsibleExample />
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/"} element={<Alluser />} />
        <Route path={"/add"} element={<Adduser />} />
      </Routes>
    </div>
  );
}

export default App;
