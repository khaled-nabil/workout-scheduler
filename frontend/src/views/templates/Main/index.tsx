import React from 'react';
import { Header } from 'views/organisms';

const MainLayout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default MainLayout;
