import React from 'react';
import PropTypes from 'prop-types';
import Tabla from '../Tabla/Tabla';
import '../card.css';

function Productos(props) {
    return (
        <React.Fragment>
            <div className="contenedor shadow">
                <div className='row'>
                <Tabla productos={props.productos} key={`Tabla`}/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Productos;