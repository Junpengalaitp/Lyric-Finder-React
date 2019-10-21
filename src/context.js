import React, { useState } from 'react'

const Context = React.createContext()

export const Provider = (props) => {

    const [trackList, setTrackList] = useState([
        { track: { trackName: 'ABC' } },
        { track: { trackName: '123' } },
    ])
    
    const [heading, setHeading] = useState("Top 10 tracks");

    return (
        <Context.Provider value={{trackList, heading}}>
            {props.children}
        </Context.Provider>
    )
}

export const Consumer = Context.Consumer