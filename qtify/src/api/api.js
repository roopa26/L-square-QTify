import React, { useEffect } from 'react';
import axios from 'axios';

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

const fetchTopAlbums = async () => {
    try{
        const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        return response;
    } 
    catch(ex){
        console.log(ex)
    }
}

const fetchNewAlbums = async () => {
    try{
        const response = axios.get(`${BACKEND_ENDPOINT}/albums/new`);
        return response;
    } 
    catch(ex){
        console.log(ex)
    }
}

const fetchSongs = async () => {
    try{
        const response = axios.get(`${BACKEND_ENDPOINT}/songs`);
        return response;
    } 
    catch(ex){
        console.log(ex)
    }   
}

const fetchFilter = async () => {
    try{
        const response = axios.get(`${BACKEND_ENDPOINT}/genres`);
        return response;
    } 
    catch(ex){
        console.log(ex)
    }
}

export {fetchTopAlbums, fetchNewAlbums, fetchSongs, fetchFilter};