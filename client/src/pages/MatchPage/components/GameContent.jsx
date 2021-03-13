import React from 'react';

// Styles
import {
    GameContainer,
    TmRow,
    TmPlayers,
    TmScore,
  } from '../style';

const GameContent = ({
    gameStart,
    handleScore,
    players,
    score
}) => {
    return (<GameContainer>
        <TmRow>
            <TmPlayers>
                <span
                    onClick={(e) => gameStart
                        ? handleScore(e, "t1", players[0]) : alert("Start the game")}
                >{players[0]}</span>
                <span
                    onClick={(e) => gameStart ?
                        handleScore(e, "t1", players[1]) : alert("Start the game")}
                >{players[1]}</span>
            </TmPlayers>
            <TmScore>
                {score.t1.total}
            </TmScore>
        </TmRow>

        <TmRow>
            <TmScore>
                {score.t2.total}
            </TmScore>
            <TmPlayers>
                <span
                    onClick={(e) => gameStart ?
                        handleScore(e, "t2", players[2]) : alert("Start the game")}
                >{players[2]}</span>
                <span
                    onClick={(e) => gameStart ? handleScore(e, "t2", players[3])
                        : alert("Start the game")
                    }
                >{players[3]}</span>
            </TmPlayers>
        </TmRow>
    </GameContainer>
    )
}

export default GameContent;