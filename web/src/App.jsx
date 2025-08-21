import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Header from "./components/Header";
import Addblog from "./pages/Addblog";
import Addcategory from "./pages/Addcategory";
import Detailblog from "./pages/Detailblog";
import { PrivateRoute } from "./services/ProtectedRoutes";
import PublicBlog from "./pages/PublicBlog";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/" element={<PublicBlog />} />

        {/* protected routes */}
        <Route path="/home" element={<PrivateRoute />}>
          <Route index element={<Home />} />
          <Route path="add-blog" element={<Addblog />} />
          <Route path="add-category" element={<Addcategory />} />
          <Route path="blog/:id" element={<Detailblog />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
