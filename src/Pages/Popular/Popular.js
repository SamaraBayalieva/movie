import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../APIKEY/APIKEY";
import {NavLink} from "react-router-dom";


const Popular = () => {
    const [popular, setPopular] = useState([])
    const getPopular = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        const {data} = await url
        setPopular(data.results)

    }

    useEffect(() => {
        getPopular()
    }, [])
    console.log(popular)


    return (
        <div id="popular">
        <div className="container">
            <div className="popular">
                {
                    popular.map(el=>(
                       <NavLink to={`/detail-page/${el.id}`}>
                           <div className="block">

                               <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""/>
                               <h1>{el.title}</h1>
                           </div>
                       </NavLink>
                    ))
                }
            </div>
        </div>
        </div>
    );



}
export default Popular;