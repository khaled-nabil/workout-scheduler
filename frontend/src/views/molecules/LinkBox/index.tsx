import css from '@styled-system/css';
import styled from 'styled-components';
import { Link } from 'views/atoms';

const LinkBox = styled(Link)(
  css({
    bg: 'white',
    border: '1px solid gray',
    padding: 3,
    borderRadius: '5px',
    mx: 1,
    display: 'flex',
  }),
);

export default LinkBox;
