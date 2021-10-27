import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from 'reactstrap';

const DetalleRestaurante = ({ nombre, fecha_apertura, ubicacion, duenos, logo_url, menu, resenas, setIsViewingDetails, setRestaurantDetailing }) => {
    const handleButtonClick = () => {
        setIsViewingDetails(false);
        setRestaurantDetailing({});
    }

    const MostrarValoracion = valoracion => {
        let valoraciones = [];

        for (let i = 0; i < valoracion; i++) {
            valoraciones.push(<FontAwesomeIcon icon={faStar} color="#b9b900" />);
        }

        return valoraciones;
    }

    // Mostrar la ubicacion del restaurante en un mapa
    const MostrarUbicacionEnMapa = () => {
        let latitud = ubicacion.latitud;
        let longitud = ubicacion.longitud;
        let url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAa555gRNLqGUNhMhZ_273n_t1iCvRFuno&q=${latitud},${longitud}`;

        return <iframe src={url} width="100%" height="300px" />;
    }

    return (
        <Col sm="12" lg="12">
            <Card>
                <CardHeader className="text-center">
                    <img src={logo_url} alt={nombre} />
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col sm="12" lg="8">
                            <h3>{nombre}</h3>
                            <cite className="text-muted">Apertura: {fecha_apertura}</cite>

                            <h4 className="mt-3">{ duenos.length > 1 ? "Dueños" : "Dueño" }:</h4>
                            <ul>
                                {duenos.map((dueno, i) => ( <li key={i}>{dueno}</li> ))}
                            </ul>

                            <h4>Ubicación:</h4>
                            <MostrarUbicacionEnMapa />
                        </Col>
                        <Col sm="12" lg="4">
                            <h4>Menu:</h4>
                            {
                                <>
                                    <p>Primer plato: {menu.primer_plato.nombre} - ${menu.primer_plato.precio}</p>
                                    <p>Plato principal: {menu.plato_principal.nombre} - ${menu.plato_principal.precio}</p>
                                    <p>Postre: {menu.postre.nombre} - ${menu.postre.precio}</p>
                                </>
                            }


                            <h4>Reseñas:</h4>
                            { 
                                resenas.map(({nombre, valoracion, descripcion}, i) => (
                                    <div key={i}>
                                        { MostrarValoracion(valoracion) }
                                        <p>Por: <b>{nombre}</b> - {descripcion}</p>
                                    </div>
                                ))
                            }
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter>
                    <Button color="secondary" onClick={handleButtonClick}>Volver</Button>
                </CardFooter>
            </Card>
        </Col>
    )
}

export default DetalleRestaurante
