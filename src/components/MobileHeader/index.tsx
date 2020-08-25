import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://avatars3.githubusercontent.com/u/43973049?s=460&u=aad0e75887440642f7c1ba6d219a9e257d0551aa&v=4" />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container>
  );
}

export default MobileHeader;