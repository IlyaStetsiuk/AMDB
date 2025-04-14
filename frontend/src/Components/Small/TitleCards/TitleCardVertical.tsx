import React from 'react';
import './titleCards.css';
import AddToWatchlistButton from '../Buttons/AddToWatchlistButton';
import { InfoDarkIcon, MyRateDarkIcon, PlayDarkIcon, RateYellowIcon } from '../../../assets/icons/exportIcons';

export interface TitleCardProps {
    poster: string;
    name: string;
    rating: number;
}

const TitleCardVertical = ({ poster, name, rating }: TitleCardProps) => {
    return (
        <div className='vertical-card'>
            <div className="top">
                <img src={poster} alt={name} className="poster" />
                <div className="add-container">
                    <AddToWatchlistButton />
                </div>
            </div>
            <div className="name">{name}</div>
            <div className="buttons">
                <div className="rating">
                    <img src={RateYellowIcon} alt="" />
                    <p className="rating">{rating % 1 === 0 ? rating + '.0' : rating}</p>
                </div>
                <div className="rate">
                    <img src={MyRateDarkIcon} alt="" />
                    <p>Rate</p>
                </div>
                <img src={InfoDarkIcon} alt="" />
            </div>
            <div className="trailer-button">
                <img src={PlayDarkIcon} alt="play" />
                <p>Trailer</p>
            </div>
        </div>
    );
}

export default TitleCardVertical;
