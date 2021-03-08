import React from 'react';

// Layout
import SettingPageBaseLayout from '../../layouts/SettingPageBaseLayout';

// Styles
import { Container } from './style';

const SettingPage = () => {
  return (
    <SettingPageBaseLayout id='dashboardLayout' className='dashboardLayout'>
      <Container>
       <h1>SettingPage Page</h1>
      </Container>
    </SettingPageBaseLayout>
  );
};

export default SettingPage;
