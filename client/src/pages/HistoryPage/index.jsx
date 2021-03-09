import React from 'react';

// Layout
import HistoryPageBaseLayout from '../../layouts/HistoryPageBaseLayout';
import HistortList from './components/HistoryList';

// Styles
import { 
  HistoryContainer,
  HistotyDate,
  Container } from './style';

const HistoryPage = () => {
  return (
    <HistoryPageBaseLayout id='dashboardLayout' className='dashboardLayout'>
      <Container>
        <HistoryContainer>
            <HistotyDate>Logs list</HistotyDate>
            <HistortList />
        </HistoryContainer>
       
      </Container>
    </HistoryPageBaseLayout>
  );
};

export default HistoryPage;
