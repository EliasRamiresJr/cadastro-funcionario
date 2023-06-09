import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/home.css"
import NavbarScreen from "./navbar"
import FooterScreen from "./footer"

function HomeScreen() {

    const [user, setUser] = useState(localStorage.getItem('user'));

    return (
        <>
            <NavbarScreen />
            <div className="container">
                <div className="row justify-content-center align-items-center vh-100">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-5">
                        <div className="border border-light border-3 rounded-4 py-5 px-4 bg-transparent">
                            <h1 className="text-white row my-4 justify-content-center">Usuário Logado !</h1>
                            <br />

                            <div className="row my-1">
                                <div className="col mb-2">
                                    <label htmlFor="nome" className="text-white">Usuário: <span>{JSON.parse(user)['name']} </span></label>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 mb-2">
                                <label htmlFor="data" className="text-white">Data de Nascimento: <span>{JSON.parse(user)['data']}</span></label>
                            </div>

                            <div className="col-12 col-sm-6 mb-2">
                                <div className="col-12 col-sm-6 mb-2">
                                    <label htmlFor="funcao" className="text-white">Função: <span>{JSON.parse(user)['funcao']}</span></label>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 mb-2">
                                <label htmlFor="especie" className="text-white">Espécie: <span>{JSON.parse(user)['especie']}</span></label>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <FooterScreen />
        </>
    )
}

export default HomeScreen