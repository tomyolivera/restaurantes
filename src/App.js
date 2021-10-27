import React from 'react';
import { Container } from 'reactstrap';

import RestauranteProvider from './Context/restaurantes/Provider';
import RouterApp from './RouterApp';

const App = () => {
    return (
        <RestauranteProvider>
            <Container className="mt-2">
                <RouterApp />
            </Container>
        </RestauranteProvider>
    )
}

export default App;
