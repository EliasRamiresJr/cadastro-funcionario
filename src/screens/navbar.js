import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle"
import { Navigate, Link } from "react-router-dom"
import UsersService from '../services/users'

//01:54:04 Aula_386_Resolução_Parte_6_Incluindo_o_nome_do_usuário_no_Header

function NavbarScreen() {

    const [redirectToHome, setRedirectToHome] = useState(false);
    const [user, setUser] = useState(localStorage.getItem('user'));

    const logout = async () => {
        await UsersService.logout();
        setRedirectToHome(true);
    }




    if (redirectToHome == true)
        return <Navigate to={{ pathname: "/" }} />

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
                <div className="container-fluid">
                    <a className="navbar-brand" href={"#"}>Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href={"#"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>{JSON.parse(user)['name']} </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href={"/edit"}>Edit</a></li>
                                    <li><a className="dropdown-item" href={"/delete"}>Delete</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#" onClick={e => logout()}>Log out</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarScreen