import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../APIKEY/APIKEY";

const Trailers = () => {
    const [trailer, setTrailer]=useState([])
    const {movieId}=useParams()
    const getTrailer = async ()=>{const url = await axios(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`)
        const{data}= await url
        setTrailer(data.results)
    }
    console.log(trailer)
    useEffect(()=>{
        getTrailer()
    },[])
    return (
        <div>
            {
                trailer.slice(0,1).map(el=>(
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${el.key}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>

                    </iframe>
                ))
            }
        </div>
    );
};

export default Trailers;