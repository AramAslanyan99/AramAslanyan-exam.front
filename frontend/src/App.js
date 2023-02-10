import './App.css';
import { Routes, Route } from "react-router-dom";
import Registration from './Components/registration';
import Login from './Components/login/index';
import Task from './Components/task';
import Menu from './Components/Menu';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/*" element={<Menu />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/tasks" element={<Task />} />
      </Routes>
         
    </div>
  );
}

export default App;
