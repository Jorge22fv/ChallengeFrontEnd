import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { UserCard } from "./userCard";

export const UserList = () => {

    const { store } = useContext(Context);

    return (
        <div>
            <div className="row border-none">
                {store.users.length > 0 && store.users.map((user, i) => (
                    <div className="card col-md-4" key={i}>
                        <UserCard user={user} />
                    </div>
                ))}

            </div >
            <Link to="/" type="button" className="btn btn-outline-dark mb-5">Volver</Link>
        </div>
    )
}

