import React from 'react';
import './home.css';
import Hero from './Hero/Hero';
import Featured from './Featured/Featured';
import Top from './Top/Top';

const Home = () => {
    return (
        <div className='home'>
            <Hero/>
            <Featured/>
            <Top/>
        </div>
    );
}

export default Home;
