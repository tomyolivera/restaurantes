import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RestauranteContext from '.';

const RestauranteProvider = ({ children }) => {
    const [restaurantes, setRestaurantes] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async function(){
            const response = await axios.get('./restaurantes.json');
            setRestaurantes(await response.data);
            setLoading(false);
        })();
    }, []);

    return (
        <RestauranteContext.Provider value={{ restaurantes, loading }}>
            { children }
        </RestauranteContext.Provider>
    )
}

export default RestauranteProvider;