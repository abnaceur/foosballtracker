import React, { useState, useEffect } from 'react';

// Layout
import HomepageBaseLayout from '../../layouts/HomepageBaseLayout';

// Iimport services
import { getGameStats } from '../../helpers/services';

// Styles
import { 
  Container,
  StatsCards,
  StatsTitle,
  StatCard
 } from './style';

const HomePage = () => {
  const [states, setStats] = useState({players: 0, matches: 0})

  useEffect(() => {
    getGameStats().then(res => {
      if (res && res.code == 200) {
        setStats(res.data);
      }
    })
  }, [])


  return (
    <HomepageBaseLayout id='dashboardLayout' className='dashboardLayout'>
      <Container>
        <StatsTitle>
          Stats
        </StatsTitle>
        <StatsCards>
          <StatCard>
            <span>{states.matches}</span>
            <p>Matches played</p>
          </StatCard>

          <StatCard>
            <span>{states.players}</span>
            <p>Active players</p>
          </StatCard>
        </StatsCards>

      </Container>
    </HomepageBaseLayout>
  );
};

export default HomePage;
