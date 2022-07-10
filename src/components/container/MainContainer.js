import React from 'react';
import { MainWrapper } from './MainContainer.styles';

function MainContainer({ children }) {
  return (
    <MainWrapper>
      {children}
    </MainWrapper>
  );
}

export default MainContainer;
