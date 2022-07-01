import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
/*import {
    Link
} from "react-router-dom";*/
import '../card.css'

function Categorias(props) {
    return (
        <React.Fragment>
            <NavLink to={`/categorias/${props.id}`} className={({ isActive }) => {
                if (document.getElementById(`carta${props.id}`)) {
                    if (isActive) {
                        document.getElementById(`carta${props.id}`).classList.add('Active');
                        document.getElementById(`carta${props.id}`).classList.remove('bg-dark');
                    }
                    else 
                    {
                        document.getElementById(`carta${props.id}`).classList.remove('Active');
                        document.getElementById(`carta${props.id}`).classList.add('bg-dark');
                    }
                }
            }
            }>
                <div className={`card bg-dark text-white shadow `} id={`carta${props.id}`}>
                    <div className="tarjeta">
                        <div>{props.nombre}</div>
                        <div>Productos: {props.cant}</div>
                    </div>
                </div>
            </NavLink>
        </React.Fragment>
    );
}

export default Categorias;