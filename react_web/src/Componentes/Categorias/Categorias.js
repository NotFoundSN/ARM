import React from 'react';
import PropTypes from 'prop-types';
import Categoria from './Categoria';
import '../card.css';
import {Route, Routes, useParams} from 'react-router-dom';
import RenderProductosCategoria from '../Categorias/RenderProductosCategoria';

function Categorias(props) {
    return (
        <React.Fragment>
            <div className="contenedor shadow">
                <div className='row'>
                    {props.cat.map(el => { return <Categoria id={el.id} nombre={el.nombre} cant={el.cant} key={`categoria${el.id}`} /> })}
                </div>
            </div>
            <Routes>
                <Route path=":id" element={<RenderProductosCategoria key="mostarCategorias"></RenderProductosCategoria>} />
            </Routes>
        </React.Fragment>
    );
}

export default Categorias;