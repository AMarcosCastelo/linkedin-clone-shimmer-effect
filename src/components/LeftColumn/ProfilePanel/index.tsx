import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://avatars3.githubusercontent.com/u/43973049?s=460&u=aad0e75887440642f7c1ba6d219a9e257d0551aa&v=4"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Antonio Marcos</h1>
        <h2>Analista & Desenvolvedor Web</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
