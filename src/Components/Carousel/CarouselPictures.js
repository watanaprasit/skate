import React, { useEffect} from 'react';
import axios from 'axios';

function CarouselPictures({setPicture}) {

    let randNum = Math.floor(Math.random * 12)

    useEffect(() => {
        axios
            .get('https://pixabay.com/api/?key=20405286-b8c84b9b689264f8e5a805d46&q=skateboarding&image_type=photo')
            .then((res) => {
                let tempPictures = []
                for(let i=0;i<3;i++) {
                    tempPictures.push(res.data.hits[i])
                }
                setPicture(tempPictures)
            })

    }, [])


    return (
        <div></div>
    );
}

export default CarouselPictures;