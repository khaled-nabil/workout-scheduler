import React from 'react';
import { MainLayout } from 'views/templates';
import { Row } from 'views/molecules';

function NotFound() {
  return (
    <MainLayout>
      <Row>Page not found</Row>
    </MainLayout>
  );
}

export default NotFound;
