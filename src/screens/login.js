import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/login.css"
import { Navigate } from "react-router-dom"
import UsersService from "../services/users"

function LoginScreen() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [redirectToRegister, setRedirectToRegister] = useState(false)
    const [redirectToHome, setRedirectToHome] = useState(false)
    const [error, setError] = useState(false)

    const HandleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const user = await UsersService.login({ name: name, password: password });
            setRedirectToHome(true);
        } catch (error) {
            setError(true);
        }
    }

    if (redirectToRegister)
        return <Navigate to={{ pathname: "/register" }} />
    else if (redirectToHome)
        return <Navigate to={{ pathname: "/home" }} />

    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center vh-100">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <form onSubmit={HandleSubmit} className="border border-light border-3 rounded-4 py-5 px-4 bg-transparent">
                            <h1 className="text-white row my-4 justify-content-center ">Tela de login </h1>
                            <br />

                            <div className="row my-1">
                                <div className="col mb-2">
                                    <label htmlFor="nome" className="text-white">Nome Completo:</label>
                                    <input
                                        name="nome"
                                        className="form-control"
                                        type="text"
                                        id="nome"
                                        placeholder="Digite o seu nome..."
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="row my-1">
                                <div className="col mb-2">
                                    <label htmlFor="senha" className="text-white">Senha:</label>
                                    <input
                                        name="senha "
                                        className="form-control"
                                        type="password"
                                        id="senha"
                                        placeholder="Digite sua senha..."
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="row my-4 justify-content-center">
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary w-100" id="btn">Entrar</button>
                                </div>
                            </div>

                            <div className="row my-4 justify-content-center">
                                <div className="col-auto">
                                    <a href="/register">Criar conta</a>
                                </div>
                            </div>
                            {error && <p className="text-danger row my-4 justify-content-center">Email or Password invalid</p>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginScreen