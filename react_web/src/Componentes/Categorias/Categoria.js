import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
/*import {
    Link
} from "react-router-dom";*/
import '../card.css'

function Categorias(props) {
    return (
        <React.Fragment>
            <NavLink to={`/categorias/${props.id}`} className={({isActive}) => isActive ? 'Active' : ''}>
                <div className="card bg-dark text-white shadow">
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