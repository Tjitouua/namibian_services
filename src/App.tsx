import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import Services from './pages/Services'
import Ministries from './pages/Ministries'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import MinistryServices from './pages/MinistryServices'
import AdminHome from './pages/AdminHome'
import AdminServices from './pages/AdminServices'


        

function App() {
  

  return (
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ministry_of_finance" element={<MinistryServices />} />
          <Route path="/admin_home" element={<AdminHome />} />
          <Route path="/admin_services" element={<AdminServices />} />
       </Routes>
     </BrowserRouter>
  )
}

export default App
