import React from "react";

export const UserCard = ({ user }) => {


    return (
        <div className="container">
            <div className="card my-3  ">
                <h5 className="card-header">{user.name}</h5>
                <div className="card-body text-start">
                    <p className="card-title"><strong>Email:</strong> {user.email}</p>
                    <p className="card-text"><strong>Ciudad:</strong> {user.address.city} </p>
                    <p className="card-text"><strong>Número telefónico:</strong> {user.phone} </p>
                    <p className="card-text"><strong>Página web:</strong> {user.website} </p>
                    <p className="card-text"><strong>Empresa:</strong> {user.company.name} </p>
                </div>
            </div>
        </div>
    )
}