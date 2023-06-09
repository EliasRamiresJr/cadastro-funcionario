import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/register.css"
import UsersService from "../services/users"
import { Navigate } from "react-router-dom"

function RegisterScreen() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [funcao, setFuncao] = useState("")
    const [data, setData] = useState("")
    const [especie, setEspecie] = useState("")
    const [redirectToLogin, setRedirectToLogin] = useState(false)
    const [error, setError] = useState(false)

    const HandleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const user = await UsersService.register({ name: name, password: password, funcao: funcao, data: data, especie: especie })
            setRedirectToLogin(true)
        } catch (error) {
            setError(true)
        }
    }

    if (redirectToLogin)
        return <Navigate to={{ pathname: "/" }} />

    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center vh-100">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-5">
                        <form onSubmit={HandleSubmit} className="border border-light border-3 rounded-4 py-5 px-4 bg-transparent">
                            <h1 className="text-white row my-4 justify-content-center">Tela de Registro</h1>
                            <br />

                            <div className="row my-1">
                                <div className="col mb-2">
                                    <label htmlFor="nome" className="text-white">Nome Completo:</label>
                                    <input
                                        name="nome"
                                        className="form-control"
                                        type="text"
                                        id="nome"
                                        placeholder="Digite o seu nome ..."
                                        onChange={e => setName(e.target.value)} />
                                </div>
                            </div>

                            <div className="row my-1">
                                <div className="col-12 col-sm-6 mb-2">
                                    <label htmlFor="genero" className="text-white">Senha:</label>
                                    <input
                                        name="senha"
                                        className="form-control"
                                        type="password"
                                        id="senha"
                                        placeholder="Digite a sua senha ..."
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="col-12 col-sm-6 mb-2">
                                    <label htmlFor="funcao" className="text-white">Função:</label>
                                    <select
                                        name="funcao"
                                        className="form-select"
                                        aria-label="Default select example"
                                        id="funcao"
                                        onChange={e => setFuncao(e.target.value)}
                                    >
                                        <option value="1">Selecione</option>
                                        <option value="4">Função 1</option>
                                        <option value="14">Função 2</option>
                                        <option value="24">Função 3</option>
                                        <option value="34">Outros</option>
                                    </select>
                                </div>


                            </div>

                            <div className="row my-1">
                                <div className="col-12 col-sm-6 mb-2">
                                    <label htmlFor="data" className="text-white">Data de Nascimento:</label>
                                    <input
                                        name="data"
                                        className="form-control"
                                        type="date"
                                        id="data"
                                        onChange={e => setData(e.target.value)}
                                    />
                                </div>

                                <div className="col-12 col-sm-6 mb-2">
                                    <label htmlFor="especie" className="text-white">Cargo:</label>
                                    <select
                                        name="especie"
                                        className="form-select"
                                        aria-label="Default select example"
                                        id="especie"
                                        onChange={e => setEspecie(e.target.value)}
                                    >
                                        <option defaultValue={""}>Selecione</option>
                                        <option value="4">1</option>
                                        <option value="14">2</option>
                                        <option value="24">3</option>
                                        <option value="34">4</option>
                                        <option value="44">5</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row my-4 justify-content-center">
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary w-100" id="btn">Cadastrar</button>
                                </div>
                            </div>
                            <div className="row my-4 justify-content-center">
                                <div className="col-auto">
                                    <a href="/">Voltar a tela de login</a>
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

export default RegisterScreen