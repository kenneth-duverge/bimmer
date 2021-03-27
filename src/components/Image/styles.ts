import styled from 'styled-components/native';

export const Image = styled.Image`
  width: 100%;
  height: 100%;

  margin-bottom: 50px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 300px;

  position: relative;
  margin: 50px 0;
`;

export const TitleContainer = styled.View`
  width: 180px;
  height: 44px;

  background-color: red;
  border: 2px solid #ffc600;

  position: absolute;
  top: -10px;
  right: 10px;
  z-index: 10;

  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: white;
  font-size: 18px;

`;
