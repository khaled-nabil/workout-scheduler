import React, { ReactElement, memo } from 'react';
import { Header } from 'views/organisms';

const MainLayout = ({ children }: { children: ReactElement }): ReactElement => (
  <>
    <Header />
    {children}
  </>
);

export default memo(MainLayout);
