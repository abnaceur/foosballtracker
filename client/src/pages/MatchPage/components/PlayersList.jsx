import React from 'react';

// Styles
import {
  PlayersList,
  PlayerItem,
  PlInfo,
  Teams
} from '../style';

import PersonIcon from '@material-ui/icons/Person';

const PlayersListItems = ({
  gamePlayers,
  showTeam,
  handleGamePls,
  playersList
}) => {

  return (gamePlayers.length < 4 && playersList && playersList.length > 0 ?
    playersList.map((pl, idx) => {
      return gamePlayers.filter(a =>
        a.player.id === pl.id).length === 0 ?
        <PlayerItem key={idx}>
          <PlInfo>
            <PersonIcon style={{ fontSize: "14px" }} />
            {pl.name}
          </PlInfo>
          <Teams>
            <React.Fragment>
              {showTeam["t1"] && gamePlayers.filter(a =>
                a.player.id === pl.id) && <span
                  onClick={(e) => handleGamePls(e, pl, "t1")}>
                  Team1</span>}

              {showTeam["t2"] && <span
                onClick={(e) => handleGamePls(e, pl, "t2")}>
                Team2</span>}
            </React.Fragment>
          </Teams>
        </PlayerItem>
        : null
    }) : null)
}

export default PlayersListItems;