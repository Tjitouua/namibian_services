import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import Services from './pages/Services'


        

function App() {
  

  return (
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
       </Routes>
     </BrowserRouter>
  )
}

export default App
