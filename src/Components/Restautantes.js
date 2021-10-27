import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Restautantes = () => {
    const [restaurantes, setRestaurantes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getRestaurantes() {
            const response = await axios.get('../../restaurantes.json');
            console.log(response)
        }

        getRestaurantes();
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default Restautantes
