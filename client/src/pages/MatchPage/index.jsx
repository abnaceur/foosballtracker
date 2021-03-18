import React, { useState, useEffect } from 'react';
import moment from 'moment';

// Layout
import MatchPageBaseLayout from '../../layouts/MatchPageBaseLayout';
import Button from '@material-ui/core/Button';

// Styles
import {
  Container,
  Header,
  InfoPos,
  Team1,
  Team2,
  PlayersList,
} from './style';

// Import services
import {
  getPlayers
} from '../../helpers/services';

// Import components
import PlayersListItems from './components/PlayersList';
import GameContent from './components/GameContent';

// Impoert services
import { createGame } from '../../helpers/services';

const MatchPage = () => {
  const [playersList, setPlayerList] = useState([]);
  const [gamePlayers, setGamePlayers] = useState([]);
  const [gameStart, setGameStart] = useState(false)
  const [gameTitle, setGameTitle] = useState("Players List");
  let [score, setScore] = useState({
    t1: {
      total: 0
    },
    t2: {
      total: 0
    }
  });
  const [trackTime, setTrackTime] = useState([0, 0]);

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

    // TODO to be refactored
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
    e.preventDefault();
    setGameStart(true);
    setGameTitle("Game on go !");
    setTrackTime([Date.now(), 0]);
  }

  const handleScore = async (e, tm, name) => {
    e.preventDefault();
    // alert(score[tm][name])
    score[tm][name] = score[tm][name] === undefined ? 1 : score[tm][name] + 1;
    score[tm].total = score[tm].total + 1;
    setScore(score);
    if (score[tm].total === 6) {
      tm === "t1"
        ? alert(`TEAM 1 ${players[0]} and ${players[1]} WON`)
        : alert(`TEAM 2 ${players[2]} and ${players[3]} WON`);

      setGameTitle("Players List");
      setGameStart(false);

      // Send data to be saved
      let data = {
        players: players,
        t1: [players[0], players[1]],
        t2: [players[2], players[3]],
        winner: tm === "t1" ? "t1" : "t2",
        looser: tm === "t1" ? "t2" : "t1",
        startAt: moment(trackTime[0]).format("MM/DD/YYYY hh:mm:ss"),
        endAt: moment(Date.now()).format("MM/DD/YYYY hh:mm:ss"),
        duration: moment(Date.now() - trackTime[0]).format("mm:ss"),
        score,
      }

      let response = await createGame(data);
      if (response.code === 200) {
        setGamePlayers([]);
        setGameStart(false)
        setGameTitle("Players List");
        setScore({
          t1: {
            total: 0
          },
          t2: {
            total: 0
          }
        });
        setTrackTime([0, 0]);
        setPlayersName([]);
        setShowTeam({
          t1: true,
          t2: true,
        });
        setCount({
          t1: 0,
          t2: 0,
        });
      } else alert("An error occured !");
    }
    updateStat();
  }

  return (
    <MatchPageBaseLayout id='dashboardLayout' className='dashboardLayout'>
      <Container>

        {/* Header */}
        {gamePlayers.length < 4 ?
          <Header>
            <InfoPos> Defense + Offense </InfoPos>
            <Team1>Team 1 : {players[0] || "--"} + {players[1] || "--"}
            </Team1>
            <Team2>Team 2 : {players[2] || "--"} + {players[3] || "--"}</Team2>
          </Header> : null}

        {/* Game on */}
        {gamePlayers.length === 4 ?
          <GameContent
            gameStart={gameStart}
            handleScore={handleScore}
            players={players}
            score={score}
          />
          : null}

        <PlayersList>
          <InfoPos>
            {gamePlayers.length === 4 ?
              !gameStart ?
                <Button
                  onClick={(e) => !gameStart ? handleStartGame(e) : alert("I can not stop, I am just a test challenge")}
                  variant="contained"
                  color="primary">
                  "Start"
                </Button> : null
              : null} {" "}
            {gameTitle}
          </InfoPos>


          <PlayersListItems
            showTeam={showTeam}
            gamePlayers={gamePlayers}
            handleGamePls={handleGamePls}
            playersList={playersList} />

        </PlayersList>

      </Container>
    </MatchPageBaseLayout>
  );
};

export default MatchPage;
