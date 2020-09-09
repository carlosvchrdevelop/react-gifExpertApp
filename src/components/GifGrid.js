import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return(
        <>
            <h3>{ category }</h3>

            { loading && <p>Loading...</p> }

            <div className='cardGrid'>
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img } 
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.defaultProps = {

}

export default GifGrid