import React, { FC } from 'react';
import { Row } from 'views/molecules';
import { Box, Image } from 'views/atoms';
import Logo from 'assets/logo.png';

const Header: FC = ({ children }) => (
  <Row>
    <Box width={1}>
      <Image src={Logo} alt="logo" />
    </Box>
    {children}
  </Row>
);

export default Header;
