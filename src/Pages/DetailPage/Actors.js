import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../APIKEY/APIKEY";
import person from "../../img/11.webp"


const Actors = () => {
    const [actor,setActor] = useState([])
    const {movieId}=useParams()
    const getActor = async ()=>{
        const url = await axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
        const {data}= await url
        setActor(data.cast)
    }
    useEffect(()=>{
        getActor()
    },[])


    return (
        <div className="actors">
            <div className="container">
            <div className="actor" >
                {
                    actor.map((el) => (
                   <div className="blocks">
                        <div className="block">
                           <NavLink to={`/detail-actors/${el.id}`}>
                               {
                                   el.profile_path ?
                                       <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.profile_path}`} alt=""/>:
                                       <img src={person} width={130} alt=""/>
                               }
                           </NavLink>
                            {/*<img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.profile_path}`} alt=""/>*/}
                            <h1>{el.name}</h1>
                        </div>
                   </div>
                    ))
                }
            </div>
        </div>
        </div>
    );
};

export default Actors;