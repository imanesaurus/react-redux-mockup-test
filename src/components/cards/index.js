import React from 'react';
import { CardContainer } from './cards.styles';

function Cards({ children }) {
  return (
    <CardContainer>
      {children}
    </CardContainer>
  );
}

export default Cards;
