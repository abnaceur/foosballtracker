import { Title } from '@material-ui/icons';
import React from 'react';

// Layout
import MatchPageBaseLayout from '../../layouts/MatchPageBaseLayout';
import PersonIcon from '@material-ui/icons/Person';

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

const MatchPage = () => {
  return (
    <MatchPageBaseLayout id='dashboardLayout' className='dashboardLayout'>
      <Container>

        {/* Header */}
        <Header>
          <InfoPos> Defense + Offense </InfoPos>
          <Team1>Team 1 : aaaa + cccccc</Team1>
          <Team2>Team 2 : aaaa + cccccc</Team2>
        </Header>

        <PlayersList>
          <InfoPos>Players List</InfoPos>
          <PlayerItem>
            <PlInfo>
              <PersonIcon style={{fontSize: "14px"}} /> Abdeljalil
          </PlInfo>
            <Teams>
              <span>Team1</span>
              <span>Team2</span>
            </Teams>
          </PlayerItem>

        </PlayersList>

      </Container>
    </MatchPageBaseLayout>
  );
};

export default MatchPage;
