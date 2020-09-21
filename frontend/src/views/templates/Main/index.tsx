import React, { ReactElement, memo } from 'react';

const MainLayout = ({ children }: { children: ReactElement }): ReactElement => (
  <>{children}</>
);

export default memo(MainLayout);
