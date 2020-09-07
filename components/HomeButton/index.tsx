import React from 'react';

import { FontAwesome5 } from '@expo/vector-icons';

import { Container, Button } from './styles';

interface Props {
  home: boolean;
}

const HomeButton: React.FC<Props> = ({ home }) => {
  // Create and light and dark version of the button
  return (
    <Container home={home}>
      <Button>
        <FontAwesome5 name="plus" size={14} color={home ? '#000' : '#fff'} />
      </Button>
    </Container>
  );
};

export default HomeButton;
