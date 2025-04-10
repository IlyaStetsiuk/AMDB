import React, { useEffect, useRef, useState } from 'react';
import './hero.css';
import AddToWatchlistButton from '../../../Components/Small/Buttons/AddToWatchlistButton';
import SphereButton from '../../../Components/Small/Buttons/SphereButton';
import Circle from '../../../Components/Small/Buttons/Circle';
import { ArrowDarkIcon, PlayDarkIcon } from '../../../assets/icons/exportIcons';
import getAverageColor from '../../../functions/getAverageColor';
import Arrows from '../../../Components/Small/Buttons/Arrows';
import FeaturedVideo from './FeaturedVideo';
import Button from '../../../Components/Small/Button/Button';

const posterData = [
    {
        poster: 'https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg',
        background: 'https://www.hollywoodreporter.com/wp-content/uploads/2024/02/rev-1-DUN2-27986r-JPv3_High_Res_JPEG-copy.jpg?w=1296&h=730&crop=1',
        header: 'Dune 2 shocks the audience',
        bottomtext: "Watch the new Dune: Part 2 Trailer",
        length: "3:19",
        link: "/"
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BYzFjMzNjOTktNDBlNy00YWZhLWExYTctZDcxNDA4OWVhOTJjXkEyXkFqcGc@._V1_.jpg',
        background: 'https://media.cnn.com/api/v1/images/stellar/prod/rev-1-mcr-t3-0093-high-res-jpeg.jpg?c=16x9&q=h_833,w_1480,c_fill',
        header: 'Minecraft Movie: Chicken Jokey meme explained',
        bottomtext: "Why are people throwing popcorn?",
        length: "1:46",
        link: "/"
    },
    {
        poster: 'https://upload.wikimedia.org/wikipedia/ru/thumb/4/48/Shrek_5_poster.jpg/640px-Shrek_5_poster.jpg',
        background: 'https://i.ytimg.com/vi/KbiwL74KyJQ/maxresdefault.jpg',
        header: 'Shreck returns with Shreck 5',
        bottomtext: "Watch the first Shreck 5 teaser",
        length: "2:10",
        link: "/"
    },
]

const Hero = () => {

    const [averageColor, setAverageColor] = useState<string>('');
    const imageRef = useRef<HTMLImageElement>(null);

    const handleImageLoad = () => {
        const img = imageRef.current;
        if (img) {
            img.crossOrigin = 'anonymous';
            const color = getAverageColor(img);
            setAverageColor(color);
            console.log(color);
        }
    };

    return (
        <div className='hero' style={{
            background: averageColor.length
                ? `radial-gradient(ellipse at 50% 400px, ${averageColor} 0%, var(--bgc) 70%)`
                : "var(--bgc)"
        }}>
            <div className="left">
                <div className="image-container">
                    <div className="image-wrapper">
                        <img onLoad={handleImageLoad} ref={imageRef} src="https://images.ctfassets.net/3m6gg2lxde82/7xyAdJA5aHVrhxeEI2UHkx/2b171e12c4f41f39a2922055cda30f46/inside-out2.png?w=2048&h=1137&fit=fill&f=faces&fm=webp&q=80" alt="" className="background" />
                    </div>
                    <div className="nav-buttons">
                        <div className="circles">
                            <Circle size={14} active={false} />
                            <Circle size={14} active={true} />
                            <Circle size={14} active={false} />
                        </div>
                        <div className="switch-image-buttons">
                            <Arrows opacity={3} leftActive={false} rightActive={true} size={42} />
                        </div>
                    </div>
                </div>
                <div className="bottom-overlay">
                    <div className="poster">
                        <div className="poster-container">
                            <img src="https://m.media-amazon.com/images/M/MV5BYWY3MDE2Y2UtOTE3Zi00MGUzLTg2MTItZjE1ZWVkMGVlODRmXkEyXkFqcGc@._V1_.jpg" alt="" className="poster-image" />
                        </div>
                        <div className="outer-add-to-watchlist">
                            <AddToWatchlistButton />
                        </div>
                    </div>
                    <div className="hero-content">
                        <SphereButton opacity={5} size={130} src={PlayDarkIcon} />
                        <div className="info">
                            <div className="info-top">
                                ‘Inside Out 2’ Make us Feel Every Emotion
                            </div>
                            <div className="info-bottom">
                                Watch the new “Inside out” Trailer
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="right">
                <div className="right-circle">
                    <Circle color={"var(--secondary-color)"} active={false} size={6} />
                </div>
                <div className="right-content">
                    <div className="right-text">
                        <div className="featured-text">Featured Videos</div>
                        <Button variant={"normal"} text='Browse Trailers' rotation={270} icon={ArrowDarkIcon}/>
                    </div>
                    <div className="featured">
                        {posterData.map(video => <FeaturedVideo length={video.length} link={video.link} poster={video.poster} header={video.header} background={video.background} bottomtext={video.bottomtext} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
