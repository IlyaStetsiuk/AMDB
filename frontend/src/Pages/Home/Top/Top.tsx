import React from 'react';
import './top.css';
import HomeElHead from '../HomeElHead/HomeElHead';
import TitleCardVertical, { TitleCardProps } from '../../../Components/Small/TitleCards/TitleCardVertical';

const movies: TitleCardProps[] = [
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BNTRlNmU1NzEtODNkNC00ZGM3LWFmNzQtMjBlMWRiYTcyMGRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        name: 'Joker: Folie à Deux',
        rating: 6.6
    },
    {
        poster: "https://cdn.europosters.eu/image/1300/art-photo/the-flash-batman-and-supergirl-i183187.jpg",
        name: "The Flash",
        rating: 8.5
    },
    {
        poster: "https://preview.redd.it/hz29fdbcqdo21.jpg?width=640&crop=smart&auto=webp&s=b2f9837c382e90d8e24546d45a7f80ee9c7b5ccb",
        name: "Braws Stars: The Big Game",
        rating: 8.3
    },
    {
        poster: "https://m.media-amazon.com/images/M/MV5BN2ZiZTdmY2MtY2E3MC00YTU1LWJhNTUtNWZmYTM5Y2I5OThkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        name: "Deadlock",
        rating: 7.0
    },
    {
        poster: "https://pbs.twimg.com/media/FvwVrbRaMAE7qmw.jpg",
        name: "The Warning",
        rating: 9.9
    },
    {
        poster: "https://m.media-amazon.com/images/M/MV5BNDgzYzNhOGUtMWI1Mi00YjJkLWI2NGItOWFlNDE4ZjE0NGExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        name: "Boruto: Naruto Next Generations",
        rating: 3.0
    }
]

const Top = () => {
    return (
        <div className='home-top'>
            <div className="top-picks">
                <HomeElHead text='Top Picks ->' arrows={{ leftActive: false, rightActive: true }} />
                <div className="movies-container">
                    {movies.map(movie => (
                        <TitleCardVertical poster={movie.poster} name={movie.name} rating={movie.rating} />
                    ))}
                </div>
            </div>
            <div className="this-week">
                <HomeElHead text='Top on IMDb this week' arrows={{ leftActive: false, rightActive: true }} />
                <div className="movies-container">
                    {movies.reverse().map(movie => (
                        <TitleCardVertical poster={movie.poster} name={movie.name} rating={movie.rating} />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Top;
