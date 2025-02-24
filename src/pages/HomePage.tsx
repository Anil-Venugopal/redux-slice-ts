import React from 'react';
import Header from '../components/layout/Header';
import Counter from '../components/counter/Counter';

const HomePage: React.FC=()=>{
    return(
        <main>
            <Header />
            <Counter />
        </main>
    )
}

export default HomePage;