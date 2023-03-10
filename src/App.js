import {useEffect, useState} from "react";
import './App.css';
import React from 'react';

import { FormControl, Navbar } from 'react-bootstrap'
import { response } from "msw";


function App() {
    const CLIENT_ID = "bd0224386916428a95c13b5f72e84be2"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])


    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        
      

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const searchArtists = async (e) => {

       
        e.preventDefault()
        
        var url = new URL('https://api.spotify.com/v1/search')
        var params= {
            q: searchKey,
            type: "artist"
        }
       
        
        url.search = new URLSearchParams(params).toString();
        
        await fetch(url,{
            method:'GET',
            mode:'cors',
            headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-type': 'application/json; charset=UTF-8'
                    },

        }).then(response => {  
            console.log("response in fetch",response);
           return response.json()})
        .then(response => setArtists(response.artists.items))
        //.then(response => response.json())

       
         
    }

    const renderArtists = () => {
        console.log("in renderartist",artists)
        return artists.map(artist => (
            <div role='listitem' key={artist.id}>
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Spotify React</h1>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <></>}

                {token ?
                    
                      <>
                      

                       <form class="form-inline" >
            <div class="input-group">

              <input type="text" id="search"class="form-control" placeholder="Search for your favourite song or artist..."  onChange={(event) => setSearchKey(event.target.value)} />
              <div class="input-group-append">
                <button id='searchButton' type="button" class="btn btn-secondary" onClick={searchArtists}><i class="fa fa-search"></i></button>
                
              </div>
            </div>
          </form>
          <button class="btn btn-secondary" style={{marginTop:'2%'}}onClick={logout}>Logout</button>
                       </>
                    : <h2>Please login</h2>
                }

                {renderArtists()}

            </header>
        </div>
    );
}

export default App;