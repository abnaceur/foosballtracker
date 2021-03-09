import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


const SettingPage = () => {
  const classes = useStyles();

  return (
    <SettingPageBaseLayout id='dashboardLayout' className='dashboardLayout'>
      <Container>
        <h1>Add new player</h1>
        <TextField
          placeholder="Add a new player ..."
          className={classes.margin}
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="primary">
          Add
      </Button>

        <PlayersList>
          <h1>Players list</h1>
          <PlayersListItems />
        </PlayersList>

      </Container>
    </SettingPageBaseLayout>
  );
};

export default SettingPage;
