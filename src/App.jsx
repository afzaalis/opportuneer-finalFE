// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import SignUp from './pages/SignUp';
import { Verif } from './pages/VerifyAcc';
import { Dashboard } from './pages/Dashboard';
import { Verified } from './pages/Verified';
import MyProfile from './pages/MyProfile';
import { Bookmark } from './pages/Bookmark/Bookmark';
import { Progress } from './pages/Progress';
import { Classes } from './pages/Classes';
import { About } from './pages/Aboutus';
import { TesMinatPage } from './pages/Tesminat';
import { TesMinatQuestion } from './pages/TesMinatQuestion';
import { HasilTesMinat } from './pages/HasilTesMinat';
import { PeluangKarir } from './pages/PeluangKarir';
import { PelatihanSkillPage } from './pages/PelatihanSkill';
import PencariKerja from './pages/PencariKerja';
import PrivateRoute from './services/privateRoute';

import './App.css'; 

function App() {
  return (
    <Router>
    <Routes>
      {/* Halaman yang tidak memerlukan autentikasi */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Dashboard" element={<Dashboard />} />

      {/* Halaman yang memerlukan autentikasi */}
      <Route path="/VerifyAcc" element={<PrivateRoute element={Verif} />} />
      <Route path="/Verified" element={<PrivateRoute element={Verified} />} />
      <Route path="/myprofile" element={<PrivateRoute element={MyProfile} />} />        
      <Route path="/bookmark" element={<PrivateRoute element={Bookmark} />} />        
      <Route path="/progress" element={<PrivateRoute element={Progress} />} />        
      <Route path="/classes" element={<PrivateRoute element={Classes} />} />        
      <Route path="/tesminat" element={<PrivateRoute element={TesMinatPage} />} />        
      <Route path="/tesminatquestion" element={<PrivateRoute element={TesMinatQuestion} />} />        
      <Route path="/hasiltesminat" element={<PrivateRoute element={HasilTesMinat} />} />        
      <Route path="/peluangkarir" element={<PrivateRoute element={PeluangKarir} />} />        
      <Route path="/pelatihanskill" element={<PrivateRoute element={PelatihanSkillPage} />} />        
      <Route path="/pencarikerja" element={<PrivateRoute element={PencariKerja} />} />        

      {/* Rute yang tidak membutuhkan autentikasi */}
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
  );
}

export default App;
