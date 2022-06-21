import React from 'react'
import './App.css'
import Structure from './Components/Structure';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext';
import ProtectedRouter from './Components/Helper/ProtectedRouter';
import User from './User/User';
import Photo from './Components/Photo/Photo'
import UserProfile from './User/UserProfile';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <UserStorage>
      <Structure>
        <main className='AppBody'>
          <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login/*' element={<Login />}/>
          <Route path='/conta/*' element={
          <ProtectedRouter>
          <User />
          </ProtectedRouter>}/>
          <Route path='foto/:id' element={<Photo />} />
          <Route path='perfil/:user' element={<UserProfile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        </main>
      </Structure>
      </UserStorage>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
