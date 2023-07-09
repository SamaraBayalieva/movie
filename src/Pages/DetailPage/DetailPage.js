import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../APIKEY/APIKEY";
import Actors from "./Actors";
import Trailer from "./Trailer";


const DetailPage = () => {
    const [detail, setDetailPage] = useState([])
    const{movieId}=useParams()
    const getDetailPage = async ()=>{
        const url = await axios (`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
        const {data}= await url
        setDetailPage(data)
    }


    useEffect(()=>{
        getDetailPage()
    },[])
    return (
        <>
            <div className="detail-page" style={{
                background:` url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${detail.backdrop_path}") no-repeat, left/cover`,
                height: '100vh'
            }}>
                <div className="container">
                    <div className="detail-page1">
                        <img className="images" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${detail.poster_path}`} width={380}  alt=""/>
                        <div className="detail-page--description">
                            <h2 style={{padding:' 30px', fontWeight:'800', fontSize:'50', color:'white'}}>{detail.title} ({detail.release_date ? detail.release_date.slice(0,4):""}) </h2>
                            <p style={{padding:' 20px 30px '}}>{detail.title}</p>
                            <p style={{padding:' 30px'}}>>{detail.overview}</p>

                            <div className="vote">
                                <h3 style={{padding:' 30px', fontWeight:'800', fontSize:'50', color:'white'}} >
                                    {Math.round(detail.vote_average * 10)} %
                                </h3>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <Actors/>
            <Trailer/>

        </>

    );
};


export default DetailPage;