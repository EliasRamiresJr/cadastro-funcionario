import React, { useState } from 'react';
import UsersService from '../services/users';
import { Navigate } from "react-router-dom";

function DeleteScreen() {
    const [redirectToHome, setRedirectToHome] = useState(false);

    const deleteUser = async () => {
        if (window.confirm('Are you sure you wish to delete this account?')) {
            await UsersService.delete()
            setRedirectToHome(true)
        }
    }

    if (redirectToHome)
        return <Navigate to={{ pathname: "/" }} />

    return (

        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-5">
                    <div className="border border-light border-3 rounded-4 py-5 px-4 bg-transparent">
                        <h1 className="text-white row my-4 justify-content-center">Clique para deletar conta</h1>
                        <br />
                        <div className="row my-4 justify-content-center">
                            <div className="col-auto">
                                <button className="btn btn-danger " onClick={() => deleteUser()}>
                                    Excluir conta
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteScreen;