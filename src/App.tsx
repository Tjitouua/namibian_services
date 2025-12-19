import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import Services from './pages/Services'
import Ministries from './pages/Ministries'


        

function App() {
  

  return (
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ministries" element={<Ministries />} />
       </Routes>
     </BrowserRouter>
  )
}

export default App
