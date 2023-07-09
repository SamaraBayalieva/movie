import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../APIKEY/APIKEY";

const Search = () => {
    const [search, setSearch] = useState([])
    const {movieName} = useParams()
    const getSearchMovie = async ()=>{
        const url = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`)
        const {data} = await url
        setSearch(data.results)
    }
    console.log(search)
    useEffect(()=>{
        getSearchMovie()
    },[])


    return (
        <div className='popular'>
            <div className="container">
                <div className="popular">
                    {
                        search.map(el=>(
                       <NavLink to={`/detail-page/${el.id}`}>
                           <div className="block">
                               <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                               <h3>{el.title}</h3>
                               <h3>{el.release_date}</h3>
                           </div>
                       </NavLink>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Search;