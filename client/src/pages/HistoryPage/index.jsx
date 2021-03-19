import React, { useState, useEffect } from 'react';

// Layout
import HistoryPageBaseLayout from '../../layouts/HistoryPageBaseLayout';
import HistortList from './components/HistoryList';

// Import services
import { getGameLogs } from '../../helpers/services';

// Styles
import {
  HistoryContainer,
  HistotyDate,
  Container
} from './style';

const HistoryPage = () => {
  const [logsList, setLogsList] = useState([]);

  useEffect(() => {
    getGameLogs().then(res => {
      if (res && res.code === 200) {
        setLogsList(res.data);
      }
    })
  }, [])

  return (
    <HistoryPageBaseLayout id='dashboardLayout' className='dashboardLayout'>
      <Container>
        <HistoryContainer>
          <HistotyDate>Logs list</HistotyDate>
          <HistortList logsList={logsList} />
        </HistoryContainer>

      </Container>
    </HistoryPageBaseLayout>
  );
};

export default HistoryPage;
