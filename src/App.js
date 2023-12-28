// Regular imports 
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Components for mainsite
import NavBar from './components/main/Navbar';
import Homepage from './components/main/Homepage';
import About from './components/main/About';
import Contact from './components/main/Contact';
import NoPage from './components/main/NoPage';
import Artists from './components/main/Artists';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} >
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="artists" element={<Artists />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
