import React from 'react';
import styled from 'styled-components/native';

const Logo = styled.View``;

const StyledHeader = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 28px;
  font-family: 'Shrikhand_400Regular';
`;

const Header = () => {
  return (
    <StyledHeader>
      <Text>Bimmer Schemer</Text>
    </StyledHeader>
  );
};

export default Header;