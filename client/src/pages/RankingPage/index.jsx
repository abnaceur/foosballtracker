import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import RankingPageBaseLayout from '../../layouts/RankingPageBaseLayout';
import PlayersList from './components/PlayersList';
import TeamsList from './components/TeamsList';

// Styles
import { Container } from './style';

// Import services
import { getGameRanking } from '../../helpers/services';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    // width:',
  },
}));

const RankingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [rankingsList, setRankingsList] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  useEffect(() => {
    getGameRanking().then(res => {
      if (res && res.code === 200) {
        setRankingsList(res.data)
      }
    })
  }, [])

  return (
    <RankingPageBaseLayout id='dashboardLayout' className='dashboardLayout'>
      <Container>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Players" {...a11yProps(0)} />
              <Tab label="Teams" {...a11yProps(1)} />
              <Tab label="Lists" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <PlayersList rankingsList={rankingsList.players}/>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <TeamsList rankingsList={rankingsList.teams} />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              Coming soon ...
            </TabPanel>
          </SwipeableViews>
        </div>
      </Container>
    </RankingPageBaseLayout>
  );
};

export default RankingPage;
