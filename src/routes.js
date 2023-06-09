import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeScreen from "./screens/home"
import LoginScreen from "./screens/login"
import RegisterScreen from "./screens/register"
import PrivateRoute from "./auth/private_route"
import EditScreen from "./screens/edit"
import DeleteScreen from "./screens/delete"

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/home" element={<PrivateRoute><HomeScreen /></PrivateRoute>} />
            <Route path="/edit" element={<PrivateRoute><EditScreen /></PrivateRoute>} />
            <Route path="/delete" element={<PrivateRoute><DeleteScreen /></PrivateRoute>} />
        </Routes>
    </BrowserRouter>
)

export default Rotas