import React from 'react';

function SideBar() {
    return (
        <React.Fragment>
            <div className="d-none d-lg-inline float-left bg-secondary">
                <span className="m-3 text-white">Ver</span>
                <ul className="list-group list-group-flush">
                    <a href="/" className="list-group-item list-group-item-primary"><i className="fas fa-hand-point-right"></i>Datos</a>
                    <a href="/" className="list-group-item list-group-item-primary"><i className="fas fa-hand-point-right"></i>Productos</a>
                    <a href="/" className="list-group-item list-group-item-primary"><i className="fas fa-hand-point-right"></i>Categorias</a>
                    <a href="/" className="list-group-item list-group-item-primary"><i className="fas fa-hand-point-right"></i>Ventas</a>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default SideBar;