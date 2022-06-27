import React, { Component } from 'react';
import {                                            //redireccionamiento
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import './estilo.css';                              //estilo
import Categorias from '../Categorias/Categorias.js'  //Categorias
import Productos from '../Productos/Productos';
import RenderProducto from '../Productos/RenderProducto';


class Datos extends Component {
    constructor() {
        super();
        this.state = {
            categorias: [],
            productos: [],
            usuarios: 0,
        }
    }

    componentDidMount() {
        fetch("/api/categorias/cantidad")
            .then(respuesta => { return respuesta.json() })
            .then(listaCategorias => {
                this.setState({ categorias: listaCategorias.data })
            })
            .catch(error => console.log(error))
        fetch("/api/productos")
            .then(respuesta => { return respuesta.json() })
            .then(listaProductos => {
                this.setState({ productos: listaProductos.data })
            })
            .catch(error => console.log(error))
        fetch("/api/usuarios")
            .then(respuesta => { return respuesta.json() })
            .then(users => {
                this.setState({ usuarios: users.data })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <Router>
                <section className="info-boxes">
                    <Link to='/categorias'>
                        <div className="info-box">
                            <div className="box-icon">
                                <i class="fas fa-folder fa-xl"></i>
                            </div>

                            <div className="box-content">
                                Categorias existentes
                                <span className="big">{this.state.categorias.length}</span>
                            </div>
                        </div>
                    </Link>
                    <Link to='/productos'>
                        <div className="info-box">
                            <div className="box-icon">
                                <i class="fas fa-box-open"></i>
                            </div>

                            <div className="box-content">
                                Cantidad de productos
                                <span className="big">{this.state.productos.length}</span>
                            </div>
                        </div>
                    </Link>
                    <Link to='/usuarios'>
                        <div className="info-box active">
                            <div className="box-icon">
                                <i class="fas fa-user"></i>
                            </div>

                            <div className="box-content">
                                Cantidad de usuarios registrados
                                <span className="big">{this.state.usuarios}</span>
                            </div>
                        </div>
                    </Link>
                </section>
                <Routes>

                    <Route path="/categorias/*" element={<Categorias cat={this.state.categorias} key="categorias"></Categorias>}>
                    </Route>

                    <Route path="/productos" element={<Productos productos={this.state.productos} key='productos' />}>
                    </Route>
                    <Route path="/productos/:id" element={<RenderProducto key='renderProducto' />}>
                    </Route>

                    <Route path="/usuarios">

                    </Route>
                </Routes>
            </Router>
        );
    }
}

export default Datos;