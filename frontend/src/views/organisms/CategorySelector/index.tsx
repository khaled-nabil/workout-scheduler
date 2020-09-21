import React, { FC } from 'react';
import { Row } from 'views/molecules';
import { Image } from 'views/atoms';
import Logo from 'assets/logo.png';

const Header: FC = ({ children }) => (
  <Row justifyContent="center" py={5}>
    <Image src={Logo} alt="logo" />
    {children}
  </Row>
);

export default Header;
