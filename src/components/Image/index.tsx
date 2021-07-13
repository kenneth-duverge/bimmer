import React from 'react';
import { ImageSourcePropType } from 'react-native';

import {
  Image as StyledImage,
  ImageContainer,
  TitleContainer,
  Text,
} from './styles';

interface Props {
  url: ImageSourcePropType;
  title: string;
}

export default function Image({ url, title }: Props) {
  return (
    <ImageContainer>
      <TitleContainer>
        <Text>{title}</Text>
      </TitleContainer>
      <StyledImage source={url} />
    </ImageContainer>
  );
}
