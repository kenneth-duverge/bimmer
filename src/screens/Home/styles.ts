import styled from 'styled-components/native';

export const View = styled.SafeAreaView`
  background-color: #ffc600;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Image = styled.Image`
  width: 100%;
  height: 300px;

  margin-bottom: 50px;
`;

export const Background = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffc600;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 50px;
  align-items: center;
`;

export const Header = styled.Text`
  color: #000;
  height: 100%;
  font-size: 28px;
  font-weight: bold;
`;
