import React from 'react';
import './menu.css';
import { SearchDarkIcon } from '../../../assets/icons/exportIcons';
import { ArrowDarkIcon } from '../../../assets/icons/exportIcons';
import { WatchlistDarkIcon } from '../../../assets/icons/exportIcons';
import { UserDarkIcon } from '../../../assets/icons/exportIcons';
import { ModeDarkIcon } from '../../../assets/icons/exportIcons';
import { Logo } from '../../../assets/icons/exportBigIcons';

const categories = ["Movies", "TV Shows", "Celebs", "Watch", "Awards", "Community"];

const Menu = () => {
    return (
        <menu>
            <div className="logo">
                <img src={Logo} alt="Srch" />
            </div>
            <div className="categories">
                {
                    categories.map(categorie => (
                        <div key={categorie} className='categorie'>{categorie}</div>
                    ))
                }
            </div>
            <div className="input">
                <div className="menu-dropdown">
                    <div className="search-category">All</div>
                    <img src={ArrowDarkIcon} alt="down" />
                </div>
                <div className="input-container">
                    <input placeholder='Search IMDb'></input>
                    <img src={SearchDarkIcon} alt="Srch" />
                </div>
            </div>
            <div className="menu-right">
                <div className="watchlist">
                    <img src={WatchlistDarkIcon} alt="Watchlist" />
                    <div>Watchlist</div>
                </div>
                <div className="user">
                    <img src={UserDarkIcon} alt="User" />
                    <div>User</div>
                </div>
                <div className="language">
                    <div>EN</div>
                    <img src={ArrowDarkIcon} alt="down" />
                </div>
                <img className='mode' src={ModeDarkIcon} alt="down" />
            </div>
        </menu>
    );
}

export default Menu;
