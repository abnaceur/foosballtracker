import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// Layout
import SettingPageBaseLayout from '../../layouts/SettingPageBaseLayout';
import PlayersListItems from './components/PlayersList';

// Styles
import {
  Container,
  PlayersList
} from './style';

// Import services
import { 
  createPlayer,
  getPlayers } from '../../helpers/services';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const SettingPage = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [playerList, setPlayersList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "")
      alert("Name is required !");
    else {
      let response = await createPlayer(name)
      if (response.code === 200)
        setPlayersList(response.data);
      else alert(response.msg);
    }
  }

  useEffect(() => {
    getPlayers().then(response => {
      if (response.code === 200) {
        setPlayersList(response.data);
      }
    })
  }, [])

  return (
    <SettingPageBaseLayout id='dashboardLayout' className='dashboardLayout'>
      <Container>
        <h1>Add new player</h1>
        <TextField
          placeholder="Add a new player ..."
          className={classes.margin}
          id="input-with-icon-textfield"
          onChange={(e) => setName(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <Button
          onClick={(e) => handleSubmit(e)}
          variant="contained"
          color="primary">
          Add
      </Button>

        <PlayersList>
          <h1>Players list</h1>
          <PlayersListItems playerList={playerList} />
        </PlayersList>

      </Container>
    </SettingPageBaseLayout>
  );
};

export default SettingPage;
