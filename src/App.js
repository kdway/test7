import './App.css';
import { BrowserRouter, Routes, Route, Switch} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/page1/Home";
import Contact from './pages/Contact';
import About from './pages/page1/About';
import Jeans from './pages/page1/Jeans';
import Cart from './pages/page1/Cart';
import NowMember from './pages/page1/NowMember';
import Des from './pages/page1/Des';
import Schuhe from './pages/page1/Schuhe';
import Klamotten from './pages/page1/Klamotten';
import Acessories from './pages/page1/Acessories';






function App() {
  return (
    <>
   
    <BrowserRouter>
    <Routes>
    
       <Route path="/" element={<Layout />}>
       <Route index element={<Home />} />
    
       <Route path="contact" element={<Contact />} />
       <Route path="about" element={<About />} />
     
     
       <Route path="Cart" element={<Cart />} />
       <Route path="NowMember" element={<NowMember />} />
       <Route path="Des" element={<Des />} />
       <Route path="Schuhe" element={<Schuhe />} />
       <Route path="Klamotten" element={<Klamotten />} />
       <Route path="Acessories" element={<Acessories />} />
       

      
      
       
      

        
      </Route>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App
