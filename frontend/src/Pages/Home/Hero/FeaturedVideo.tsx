import React from 'react';
import { useNavigate } from 'react-router';
import SphereButton from '../../../Components/Small/Buttons/SphereButton';
import { PlayDarkIcon } from '../../../assets/icons/exportIcons';
import './featuredVideo.css';

interface FeaturedVideoProps {
    poster: string,
    background: string,
    header: string,
    bottomtext: string,
    length: string,
    link: string
}

const FeaturedVideo = ({ poster, background, header, bottomtext, length, link }: FeaturedVideoProps) => {

    const navigate = useNavigate()

    return (
        <div
            onClick={() => navigate(link)}
            className='featured-video'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="poster">
                <img src={poster} alt="poster" />
            </div>
            <div className="right">
                <div className="right-top">
                    <div className="header">{header}</div>
                    <div className="bottom-text">{bottomtext}</div>
                </div>
                <div className="bottom">
                    <div className="time">{length}</div>
                    <SphereButton coefficient={1.5} opacity={3} size={50} src={PlayDarkIcon} />
                </div>
            </div>
        </div>
    );
}

export default FeaturedVideo;
