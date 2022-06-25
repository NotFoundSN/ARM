import React from 'react';

function Footer() {
    return (
        <React.Fragment>
            <footer className="w-100 bg-dark text-white b-0">
                <div className="float-left">
                    <ul>
                        Redes:
                        <li>
                            Seguinos en nuestro <a href=""><i className="fab fa-instagram"></i>instagram</a>
                        </li>
                        <li>
                            Enterate de nuestras novedades en nuestro <a href=""><i className="fab fa-facebook"></i>facebook</a> y <a href=""><i className="fab fa-twitter"></i>twitter</a>
                        </li>
                    </ul>
                </div>
                <div className="float-rigth">
                    <ul>
                        Datos de contacto:
                        <li>
                            Comunicate con nosotros con nuestro mail:
                        </li>
                        <li>
                            o llamanos al <i className="fas fa-phone"></i>011-030-3456
                        </li>
                        <li>
                            o pasate por nuestro local en calle falsa 123, en san nicolas de los arroyos
                        </li>
                    </ul>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;