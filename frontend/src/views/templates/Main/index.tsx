import React from 'react';
import { Container } from 'views/atoms';
import { Header } from 'views/organisms';

const MainLayout: React.FC = ({ children }) => (
  <Container>
    <Header />
    {children}
  </Container>
);

export default MainLayout;
