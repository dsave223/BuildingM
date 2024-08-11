import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, Suspense, lazy } from "react";
import Loading from "../components/pages/Loading";

const Login = lazy (() => import ('./../components/pages/Login'));
const Registre = lazy(() => import ('./../components/pages/Registre'));
const Home = lazy(() => import ('./../components/pages/Home'));
const Setting = lazy(() => import ('./../components/pages/Setting'));
const NotFound = lazy(() => import ('./../components/pages/NotFound'))

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/registre" element={<Registre/>}/>
          <Route path="/home" element={<Home/>} />
          <Route path="/setting" element={<Setting/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
export default App;
