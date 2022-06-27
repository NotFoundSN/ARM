import React from 'react';
import PropTypes from 'prop-types';
import {Route, Routes, useParams} from 'react-router-dom';
import Producto from './Producto';

function RenderProductosCategoria(props) {
    return (
        <React.Fragment>
            <Producto id={useParams().id}/>
        </React.Fragment>
    );
}

export default RenderProductosCategoria;