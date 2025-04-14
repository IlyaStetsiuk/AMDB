import React from 'react';
import './featured.css';
import Circle from '../../../Components/Small/Buttons/Circle';
import Arrows from '../../../Components/Small/Buttons/Arrows';
import OvalButton from '../../../Components/Small/Buttons/OvalButton';
import { ListDarkIcon } from '../../../assets/icons/exportIcons';
import FeaturedArticle, { FeaturedArticleProps } from './FeaturedArticle';

const articles : FeaturedArticleProps[] = [
    {
        images: ['https://www.the-sun.com/wp-content/uploads/sites/6/2025/03/ashJPG-JS982178004.jpg?strip=all&w=330',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhd7oPTcaeqZijNnLhvrl5s5_Obi2en2elr40AtlKPaMfyFQOOIhZ2KH_FNVB0eOPWdCQ&usqp=CAU',
            'https://pbs.twimg.com/media/GB_U2EMWIAA77q5.jpg'
        ],
        type: 'Gallery',
        name: 'Actors with the best physique',
        bottomType: 'photos',
    },
    {
        images: ['https://deadline.com/wp-content/uploads/2025/02/jason-statham.jpg'],
        type: 'List',
        name: 'Beast Jason Statham quotes',
        bottomType: 'list',
    },
    {
        images: ['https://upload.wikimedia.org/wikipedia/ru/3/3c/Steel_Ball_Run.jpg',
            'https://m.media-amazon.com/images/I/81ROuZqdRZL._AC_UF350,350_QL50_.jpg'],
        type: 'Gallery',
        name: 'Jojos: what are the future parts',
        bottomType: 'gallery',
    },
    {
        images: ['https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_FMjpg_UX1000_.jpg',
            'https://m.media-amazon.com/images/M/MV5BMDFjOWFkYzktYzhhMC00NmYyLTkwY2EtYjViMDhmNzg0OGFkXkEyXkFqcGc@._V1_.jpg',
            'https://r.res.easebar.com/pic/20250404/5ce9c400-e857-4f5f-aed3-41727c5d5dd6.jpeg'
        ],
        type: 'List',
        name: 'Best new releases',
        bottomType: 'picks',
    }
]

const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <div className="name">
                    <Circle size={6} color='var(--secondary-color)' />
                    <div className="name-text">
                        Featured Today
                    </div>
                </div>
                <Arrows size={42} leftActive={false} rightActive={true} />
            </div>
            <div className="carousel">
                {articles.map(article => 
                    <FeaturedArticle images={article.images} type={article.type} name={article.name} bottomType={article.bottomType}/>
                )}
            </div>
        </div>
    );
}

export default Featured;
