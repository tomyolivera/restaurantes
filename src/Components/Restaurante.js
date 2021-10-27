import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Col } from 'reactstrap'

const Restaurante = ({ id, nombre, fecha_apertura, ubicacion, duenos, logo_url, menu, resenas, setIsViewingDetails, setRestaurantDetailing }) => {
    const handleButtonClick = () => {
        setIsViewingDetails(true);
        setRestaurantDetailing({ id, nombre, fecha_apertura, ubicacion, duenos, logo_url, menu, resenas});
    }
    
    return (
        <Col sm="12" lg="3" className="mb-3">
            <Card>
                <CardHeader>
                    <img width="100%" src={logo_url} alt={nombre} />
                </CardHeader>
                <CardBody>
                    <h3>{nombre}</h3>
                    <cite className="text-muted">Apertura: {fecha_apertura}</cite>
                </CardBody>
                <CardFooter>
                    <Button color="primary" onClick={handleButtonClick}>Ver más</Button>
                </CardFooter>
            </Card>
        </Col>
    )
}

export default Restaurante
