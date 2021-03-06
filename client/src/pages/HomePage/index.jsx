import React from 'react';

// Layout
import HomepageBaseLayout from '../../layouts/HomepageBaseLayout';

// Styles
import { Container } from './style';

const HomePage = () => {
  return (
    <HomepageBaseLayout id='dashboardLayout' className='dashboardLayout'>
      <Container>
       <h1>Home Page</h1>
      </Container>
    </HomepageBaseLayout>
  );
};

export default HomePage;
