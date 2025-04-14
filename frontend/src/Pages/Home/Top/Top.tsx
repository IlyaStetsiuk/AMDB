import React from 'react';
import './top.css';
import HomeElHead from '../HomeElHead/HomeElHead';

const Top = () => {
    return (
        <div className='top'>
            <HomeElHead text='Top Picks' arrows={{ leftActive: false, rightActive: true }} />
        </div>
    );
}

export default Top;
