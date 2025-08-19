import React from 'react'
import { Route, Routes} from 'react-router';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Header from './components/Header'
import Addblog from './pages/Addblog';
import Addcategory from './pages/Addcategory';
import Detailblog from './pages/Detailblog';
const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Signup/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add-blog" element={<Addblog/>}></Route>
        <Route path="/add-category" element={<Addcategory/>}></Route>
        <Route path="/blog/:id" element={<Detailblog/>}></Route>
      
      </Routes>
    </>
  )
}

export default App