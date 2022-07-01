import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes, useParams } from 'react-router-dom';
import './estilo.css';
import Row from './Row';

function Tabla(props) {
    return (
        <React.Fragment>
            <div className='tabla'>
                <div className='titulos'>
                    <div className='celda'>Imagen</div>
                    <div className='celda'>Nombre</div>
                    <div className='celda'>Precio</div>
                    <div className='celda'>Descuento</div>
                </div>
                {props.productos.map(producto => { return <Row elemento={producto} key={`producto${producto.id}`} /> })}
            </div>

        </React.Fragment>
    );
}

export default Tabla;

