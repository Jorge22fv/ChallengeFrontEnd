import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom"
import { Context } from '../store/appContext';

export const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState("");
    const { actions } = useContext(Context);

    const handleSubmit = (e) => {
        if (name === "" || age === "" || email === "") {
            e.preventDefault()
            setError("Debes completar todos los campos")
        }
        const userInfo = { name, email, age }
        actions.setData(userInfo)
    }
    return (
        <div>
            {error !== "" && <div className="alert alert-danger m-5" role="alert">
                {error}
            </div>}
            <form className="form border rounded col-md-5 mt-5">
                <div className="m-3 text-start">
                    <label className="form-label" >Nombre</label>
                    <input type="text" className="form-control" id="name" placeholder="Nombre" required
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="m-3 mb-4 text-start">
                    <label className="form-label">Edad</label>
                    <input type="number" className="form-control" id="age" placeholder="Edad" required
                        onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="m-3 text-start">
                    <label className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" required
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <Link to="/resultForm" type="button" className="btn btn-outline-dark mb-5 m-auto"
                    onClick={(e) => handleSubmit(e)}>Ingresar</Link>
            </form>
            <Link to="/userList" type="button" className="btn btn-outline-dark m-5">Ver contactos</Link>
        </div>
    )
}