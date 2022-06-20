import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import avatar from "../avatar.png"
export const ResultForm = () => {
    const { store } = useContext(Context);

    return (
        <div className="container col-md-4 mt-5">

            <div className="card">
                <div className="cardImg">
                    <img src={avatar} className="card-img-top avatar my-3" />
                </div>
                <div className="card-title"><h5 className="my-3">{store.name}</h5></div>
                <div className="card-body">
                    <p className="card-text">Hola, mi nombre es {store.name}, tengo {store.age} años de edad y voy comenzando en el mundo de la programación.</p>
                    <p>Si quieres contactarme te dejo mi correo electrónico {store.email}.</p><br />
                    <p>Saludos!</p>
                </div>
            </div>




            <Link to="/" type="button" className="btn btn-outline-dark mt-5">Volver</Link>
        </div>
    )
}

