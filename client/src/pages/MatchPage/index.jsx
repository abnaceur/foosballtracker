import React, { useState, useEffect } from 'react';
import { Title } from '@material-ui/icons';

// Layout
import MatchPageBaseLayout from '../../layouts/MatchPageBaseLayout';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';

// Styles
import {
  Container,
  Header,
  InfoPos,
  Team1,
  Team2,
  PlayersList,
  PlayerItem,
  PlInfo,
  Teams
} from './style';

// Import services
import {
  getPlayers
} from '../../helpers/services';

const MatchPage = () => {
  const [playersList, setPlayerList] = useState([]);
  const [gamePlayers, setGamePlayers] = useState([]);
  const [gameTitle, setGameTitle] = useState("Players List")
  let [players, setPlayersName] = useState([]);
  let [showTeam, setShowTeam] = useState({
    t1: true,
    t2: true,
  });
  let [count, setCount] = useState({
    t1: 0,
    t2: 0,
  });

  const handleGamePls = (e, pl, nb) => {
    e.preventDefault();
    if (count[nb] < 2) {
      count[nb] = count[nb] + 1;
      setCount(count);
      gamePlayers.push({
        type: count[nb] % 2 ? "o" : "d",
        player: pl,
        team: nb
      })
      setGamePlayers(gamePlayers);
      if (count[nb] === 2) {
        showTeam[nb] = false
        setShowTeam(showTeam);
      }
    }

    if (gamePlayers.length === 4) {
      setGameTitle("Start the game")
    }
    updateStat();
  }

  useEffect(() => {
    getPlayers().then(response => {
      if (response.code == 200) {
        setPlayerList(response.data);
      }
    })
  }, []);

  useEffect(() => {
    let players = [];

    for (let i = 1; i <= 2; i++) {
      players.push(gamePlayers.filter((a) =>
        a.type == (i % 2 ? "o" : "d")
        && a.team == "t1")[0]?.player?.name || "--")
    }

    for (let i = 3; i <= 4; i++) {
      players.push(gamePlayers.filter((a) =>
        a.type == (i % 2 ? "o" : "d")
        && a.team == "t2")[0]?.player?.name || "--")
    }

    setPlayersName(players);
  }, [gamePlayers.length])

  const [, setUpdate] = useState({})
  const updateStat = () => { setUpdate({}) };

  const handleStartGame = (e) => {

  }

  return (
    <MatchPageBaseLayout id='dashboardLayout' className='dashboardLayout'>
      <Container>

        {/* Header */}
        <Header>
          <InfoPos> Defense + Offense </InfoPos>
          <Team1>Team 1 : {players[0] || "--"} + {players[1] || "--"}
          </Team1>
          <Team2>Team 2 : {players[2] || "--"} + {players[3] || "--"}</Team2>
        </Header>

        <PlayersList>
          <InfoPos>
            {gamePlayers.length === 4 ?
              <Button
                onClick={(e) => handleStartGame(e)}
                variant="contained"
                color="primary">
                Start
          </Button>
              : null} {" "}
            {gameTitle}

          </InfoPos>
          {playersList && playersList.length > 0 ?
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
            }) : null}
        </PlayersList>

      </Container>
    </MatchPageBaseLayout>
  );
};

export default MatchPage;
