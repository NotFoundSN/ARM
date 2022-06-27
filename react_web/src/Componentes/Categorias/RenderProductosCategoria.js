import React from 'react';
import PropTypes from 'prop-types';
import Categoria from './Categoria';
import '../card.css';
import {Route, Routes, useParams} from 'react-router-dom';
import Reender from './Reender';

function RenderProductosCategoria(props) {
    return (
        <React.Fragment>
            <Reender id={useParams().id}></Reender>
        </React.Fragment>
    );
}

export default RenderProductosCategoria;