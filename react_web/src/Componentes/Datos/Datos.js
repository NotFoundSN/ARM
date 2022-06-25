import React, { Component } from 'react';

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
        fetch("/api/categorias")
            .then(respuesta => { return respuesta.json() })
            .then(listaCategorias => {
                console.log(listaCategorias.data)
                this.setState({ categorias: listaCategorias.data })
            })
            .catch(error => console.log(error))
        fetch("/api/productos")
            .then(respuesta => { return respuesta.json() })
            .then(listaProductos => {
                console.log(listaProductos.data)
                this.setState({ productos: listaProductos.data })
            })
            .catch(error => console.log(error))
        fetch("/api/usuarios")
            .then(respuesta => { return respuesta.json() })
            .then(users => {
                console.log(users.data)
                this.setState({ usuarios: users.data })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <p>la cantidad de categorias es {this.state.categorias.length}</p>
                    <p>la cantidad de productos es {this.state.productos.length}</p>
                    <p>la cantidad de usuarios es {this.state.usuarios}</p>
                </div>
            </React.Fragment>
        );
    }
}

export default Datos;