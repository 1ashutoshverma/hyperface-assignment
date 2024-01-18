import { createContext, useState } from "react";


export const playerContext = createContext();

const PlayerConextProvider = ({ children }) => {
    const [currentPlay, setCurrentPlay] = useState();

    return (
        <playerContext.Provider value={{ currentPlay, setCurrentPlay }}>
            {children}
        </playerContext.Provider>
    )
}

export default PlayerConextProvider