import React, { useContext, useState } from 'react'
import { Row } from 'reactstrap';

import Restaurante from './Restaurante';
import RestauranteContext from '../Context/restaurantes';
import DetalleRestaurante from './DetalleRestaurante';

const Restaurantes = () => {
    const { loading, restaurantes } = useContext(RestauranteContext);
    const [isViewingDetails, setIsViewingDetails] = useState(false);
    const [restaurantDetailing, setRestaurantDetailing] = useState({});

    return (
        <Row>
            {
                loading 
                ? <h3>Loading...</h3>
                : <>
                    <h1>{isViewingDetails ? "Restaurante" : "Restaurantes"}</h1>
                    {
                        isViewingDetails
                        ? <DetalleRestaurante nombre={restaurantDetailing.nombre}
                                            fecha_apertura={restaurantDetailing.fecha_apertura}
                                            ubicacion={restaurantDetailing.ubicacion}
                                            duenos={restaurantDetailing.duenos}
                                            logo_url={restaurantDetailing.logo_url}
                                            menu={restaurantDetailing.menu}
                                            resenas={restaurantDetailing.resenas}
                                            setIsViewingDetails={setIsViewingDetails}
                                            setRestaurantDetailing={setRestaurantDetailing}
                                        />
                        : restaurantes.map(({ id, nombre, fecha_apertura, ubicacion, duenos, logo_url, menu, resenas }, i) => (
                            <Restaurante key={i}
                                        id={id}
                                        nombre={nombre}
                                        fecha_apertura={fecha_apertura}
                                        ubicacion={ubicacion}
                                        duenos={duenos}
                                        logo_url={logo_url}
                                        menu={menu}
                                        resenas={resenas}
                                        setIsViewingDetails={setIsViewingDetails}
                                        setRestaurantDetailing={setRestaurantDetailing}
                                    />
                        ))
                    }
                </>
            }
        </Row>
    )
}

export default Restaurantes
