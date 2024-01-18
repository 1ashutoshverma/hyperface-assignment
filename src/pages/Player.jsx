import React from 'react'
import Top from '../components/Player/Top'
import PlayerData from '../components/Player/PlayerData'
import PlayerControl from '../components/Player/PlayerControl'
import styles from "./Player.module.css"
const Player = () => {
    return (
        <div id={styles.player}>
            <Top />
            <PlayerData />
            <PlayerControl />
        </div>
    )
}

export default Player
