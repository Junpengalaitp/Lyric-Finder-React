import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Context = React.createContext()

export const Provider = (props) => {

    const [trackList, setTrackList] = useState([])
    
    const [heading, setHeading] = useState("Top 10 tracks");

    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                console.log(res.data)
                setTrackList(res.data.message.body.track_list)})
            .catch(err => console.log(err))
    }, [])

    return (
        <Context.Provider value={{trackList, heading}}>
            {props.children}
        </Context.Provider>
    )
}

export const Consumer = Context.Consumer