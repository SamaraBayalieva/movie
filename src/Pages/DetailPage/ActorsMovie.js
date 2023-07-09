import React, {useEffect, useState} from 'react';
import axios from "axios";
import {NavLink, useParams} from "react-router-dom";
import {API_KEY} from "../../APIKEY/APIKEY";
import Slider from "react-slick"

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
};

const ActorsMovie = () => {

    const [actorsMovie, setActorsMovie]=useState([])
    const {actorsId}  = useParams()
    const getActorsMovie = async ()=>{
        const url = await axios (`https://api.themoviedb.org/3/person/${actorsId}/movie_credits?api_key=${API_KEY}&language=en-US`)
    const {data} = url
        setActorsMovie(data.cast)
    }
    console.log(actorsMovie)
useEffect(()=>{
    getActorsMovie(API_KEY)
},[])
    return (
        <div className='actorsMovie'>
            <div className="container">
                <div className='actorsMovie'>
                    <Slider {...settings}>
                    {
                      actorsMovie.map(el=>(

                    <NavLink to={`/detail-page/${el.id}`}>
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`} alt=""/>
                        <p>{el.title}</p>
                    </NavLink>

                          ))
               }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default ActorsMovie;