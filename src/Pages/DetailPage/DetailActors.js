import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {API_KEY} from "../../APIKEY/APIKEY";
import ActorsMovie from "./ActorsMovie";

const DetailActors = () => {
    const [detailActors, setDetailActors] = useState({})
    const {actorsId} = useParams()
    const getDetailActors = async  () =>{
        const res = await axios (`https://api.themoviedb.org/3/person/${actorsId}?api_key=${API_KEY}&language=en-US`)
   const {data}= await res
        setDetailActors(data)

    }
    useEffect(()=>{
       getDetailActors()
    },[])


    return (
        <div className="detail-actors">
            <div className="container">
                <div className="info-actors" style={{
                    display:'flex'
                }}>
                   <div style={{
                       margin:'0 30px'
                   }}>
                       <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detailActors.profile_path}`} alt=""/>
                   </div>
                    <div>
                        <h2>{detailActors.name}</h2>
                        <p style={{
                            padding:'5rem 0'
                        }}>Биография</p>
                        <h4>{detailActors.biography}</h4>
                    </div>
                </div>
            </div>
            <ActorsMovie/>

        </div>
    );
};

export default DetailActors;