import React from 'react';

// Layout
import HistoryPageBaseLayout from '../../layouts/HistoryPageBaseLayout';

// Styles
import { Container } from './style';

const HistoryPage = () => {
  return (
    <HistoryPageBaseLayout id='dashboardLayout' className='dashboardLayout'>
      <Container>
       <h1>HistoryPage</h1>
      </Container>
    </HistoryPageBaseLayout>
  );
};

export default HistoryPage;
