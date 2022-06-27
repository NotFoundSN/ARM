import React, { Component } from 'react';
import '../card.css'
import Tabla from '../Tabla/Tabla';
//import { useParams } from "react-router-dom";


class Reender extends Component {
    constructor() {
        super();
        this.state = {
            productos: [],
        }
    }

    componentDidMount() {
        fetch('/api/categorias/' + this.props.id)
            .then(respuesta => { return respuesta.json() })
            .then(listaProductos => {
                this.setState({ productos: listaProductos.data })
            })
            .catch(error => console.log(error))
    }
    componentDidUpdate() {
        fetch('/api/categorias/' + this.props.id)
            .then(respuesta => { return respuesta.json() })
            .then(listaProductos => {
                this.setState({ productos: listaProductos.data })
            })
            .catch(error => console.log(error))
    }

    render() {
        let valor;
        return (
            <div>
                <Tabla productos={this.state.productos} key={`Tabla`}/>
            </div>
        );
    }
}

export default Reender;