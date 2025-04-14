import React from 'react';
import './home.css';
import Hero from './Hero/Hero';
import Featured from './Featured/Featured';

const Home = () => {
    return (
        <div className='home'>
            <Hero/>
            <Featured/>
        </div>
    );
}

export default Home;
