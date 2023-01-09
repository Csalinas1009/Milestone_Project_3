import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import Login from './Pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/Profile" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);