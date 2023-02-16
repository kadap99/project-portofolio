import React from 'react';
import './App.css';

import Homee from './Component/Home';
import Nf from './Component/Nf'
import Profil from './Component/Profil';
import Skill from './Component/Skill';
import { Route, Routes } from 'react-router-dom';


export default function App() {
  return (
        <Routes>
          <Route path='/' element={<Homee/>} />
          <Route path='/profil' element={<Profil/>} />
          <Route path='/skill' element={<Skill/>} />
          <Route path='*' element={<Nf/>} />

        </Routes>
  )
}


