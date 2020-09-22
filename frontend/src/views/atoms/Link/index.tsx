import React, { FC } from 'react';
import styled from 'styled-components';
import { flex, flexbox, space, layout, color, border } from 'styled-system';
import { LinkAtom } from './Link.interface';
import { Link as LinkDOM } from 'react-router-dom';

const StyledLink: FC<Partial<LinkAtom>> = styled(LinkDOM)(
  flex,
  flexbox,
  space,
  layout,
  color,
  border,
);

const Link: React.FC<LinkAtom> = ({ href, children, ...props }) => {
  const internalRoute = href?.substr(0, 4) !== 'http';
  return (
    <StyledLink to={internalRoute ? href : undefined} {...props}>
      {children}
    </StyledLink>
  );
};

export default Link;
