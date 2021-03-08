import React from 'react';

// Layout
import MatchPageBaseLayout from '../../layouts/MatchPageBaseLayout';

// Styles
import { Container } from './style';

const MatchPage = () => {
  return (
    <MatchPageBaseLayout id='dashboardLayout' className='dashboardLayout'>
      <Container>
       <h1>MatchPage</h1>
      </Container>
    </MatchPageBaseLayout>
  );
};

export default MatchPage;
