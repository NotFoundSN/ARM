import React, { Component } from 'react';
import Tabla from '../Tabla/Tabla';
import './estilo.css'

class Producto extends Component {
    constructor() {
        super();
        this.state = {
            producto: {},
        }
    }

    componentDidMount() {
        fetch('/api/productos/' + this.props.id)
            .then(respuesta => { return respuesta.json() })
            .then(Producto => {
                console.log(Producto.data);
                this.setState({ producto: Producto.data })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
                <article className="productDetail">
                    <div className="justify-content-center">
                        <img className='imagenProd' src={`/img/productosImagenes/${this.state.producto.imagen}`} alt='imagen del producto' />
                            <ul className="productStats">
                                <li className="productName">{this.state.producto.nombre}</li>
                                <li className="productDescription">
                                    {this.state.producto.descripcion}
                                </li>
                                <li className="productPrice">{this.state.producto.precio} {this.state.producto.moneda}</li>
                                <li className="productDiscount">{this.state.producto.descuento}</li>
                            </ul>
                    </div>
                </article>
        );
    }
}

export default Producto;