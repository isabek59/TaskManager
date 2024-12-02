import './App.css';
import { Header } from './Header/Header';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Main } from './Main/Main'
import { All } from './All/All';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import { Projects } from './Projects/Projects';


function App() {
  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path="" element={<Main />}></Route>
        <Route path="/all" element={<All />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/projects/:projectId" element={<Projects />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
