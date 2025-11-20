import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage';
import Dashboard from "./pages/Dashboard";
import PageNotfound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<PageNotfound />} />
      </Routes>
    </BrowserRouter>)
}

export default App
