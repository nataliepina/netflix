import React from 'react';
import { Container, Inner, Item } from './styles/jumbotron';

const Jumbotron = ({ children, direction = 'row', ...restProps }) => {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  )
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}


export default Jumbotron;