import React from 'react';
import OvalButton from '../../../Components/Small/Buttons/OvalButton';
import { ListDarkIcon } from '../../../assets/icons/exportIcons';
import { GalleryDarkIcon } from '../../../assets/icons/exportIcons';

export interface FeaturedArticleProps {
    images: string[];
    type: 'List' | 'Gallery';
    name: string;
    bottomType: 'picks' | 'gallery' | 'list' | 'photos';
    link?: 'string'
}

const iconMap = {
    List: ListDarkIcon,
    Gallery: GalleryDarkIcon
}

const FeaturedArticle = ({ images, type, name, bottomType, link }: FeaturedArticleProps) => {
    return (
        <div className='featured-article'>
            <div className="main">
                <div className="images">
                    {images.map(image => (
                        <img style={{ width: 342 / images.length }} src={image} alt='movie-image'></img>
                    ))}
                </div>
                <div className="list-button">
                    <OvalButton text={type} icon={iconMap[type]} size={24} />
                </div>
            </div>
            <div className="bottom-text">
                <div className="name">{name}</div>
                <div className="bottom-type">See the {bottomType}</div>
            </div>
        </div>
    );
}

export default FeaturedArticle;
