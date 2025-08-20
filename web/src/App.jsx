import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Header from "./components/Header";
import Addblog from "./pages/Addblog";
import Addcategory from "./pages/Addcategory";
import Detailblog from "./pages/Detailblog";
import { PrivateRoute} from './services/ProtectedRoutes'
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Signup />}></Route>
    
        {/* protected route */}
        <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Home />}></Route>
          <Route path="/add-blog" element={<Addblog />}></Route>
          <Route path="/add-category" element={<Addcategory />}></Route>
          <Route path="/blog/:id" element={<Detailblog />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
