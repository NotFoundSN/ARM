import React, { Component } from 'react';
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
            <React.Fragment>
                <article className="productDetail">
                    <div>
                        <img className='imagenProd' src={`/img/productosImagenes/${this.state.producto.imagen}`} alt='imagen del producto' />
                    </div>
                    <ul className="productStats">
                        <li className="productName">{this.state.producto.nombre}</li>
                        <li className="productPrice">{this.state.producto.precio} {this.state.producto.moneda}</li>
                        <li className="productDiscount">descuento del {this.state.producto.descuento}%</li>
                    </ul>
                    <p className="productDescription">{this.state.producto.descripcion}</p>
                </article>
                
            </React.Fragment>
        );
    }
}

export default Producto;