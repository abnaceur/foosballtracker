import React from 'react';

// Layout
import RankingPageBaseLayout from '../../layouts/RankingPageBaseLayout';

// Styles
import { Container } from './style';

const RankingPage = () => {
  return (
    <RankingPageBaseLayout id='dashboardLayout' className='dashboardLayout'>
      <Container>
       <h1>RankingPage Page</h1>
      </Container>
    </RankingPageBaseLayout>
  );
};

export default RankingPage;
