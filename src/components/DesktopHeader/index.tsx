import React from 'react';

import {
  Container,
  Wrapper,
  LinkedInIcon,
  SearchInput,
  HomeIcon,
  NotificationsIcons,
  ProfileCircle,
  CaretDownIcon
} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Inicio</span>
            </button>
            <button>
              <NotificationsIcons />
              <span>Notificações</span>
            </button>
            <button>
              <ProfileCircle src="https://avatars3.githubusercontent.com/u/43973049?s=460&u=aad0e75887440642f7c1ba6d219a9e257d0551aa&v=4" />
              <span>
                Eu <CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
}

export default DesktopHeader;