import SignUp from "../pages/signUp/Index";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Login from "../pages/login/Index";
import MainMaps from "../pages/mainpage/Index";
import SpotsDetail from "../pages/spotsDetail";
import UserPage from "../pages/userpage/Index";
import TeamDetail from "../pages/userpage/TeamDetail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/" element={<MainMaps />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/spotsdetail" element={<SpotsDetail />} />
        <Route path="/teamdetail" element={<TeamDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
