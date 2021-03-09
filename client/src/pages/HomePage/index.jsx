import React from 'react';

// Layout
import HomepageBaseLayout from '../../layouts/HomepageBaseLayout';

// Styles
import { 
  Container,
  StatsCards,
  StatsTitle,
  StatCard
 } from './style';

const HomePage = () => {
  return (
    <HomepageBaseLayout id='dashboardLayout' className='dashboardLayout'>
      <Container>
        <StatsTitle>
          Stats
        </StatsTitle>
        <StatsCards>
          <StatCard>
            <span>0</span>
            <p>Matches played</p>
          </StatCard>

          <StatCard>
            <span>0</span>
            <p>Active players</p>
          </StatCard>
        </StatsCards>

      </Container>
    </HomepageBaseLayout>
  );
};

export default HomePage;
