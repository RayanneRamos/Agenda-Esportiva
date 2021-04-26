import React from 'react';
import { MatchBox, Header, HeaderItem, Badge, Team, PlayInfo } from './AgendaEsportiva.style';

function AgendaEsportiva() {
  return (
    <MatchBox>
      <Header>
        <HeaderItem>Futebol</HeaderItem>
        <HeaderItem>21:30</HeaderItem>
      </Header>
      <div>
        <div>
          <div>
            <Badge src="" />
            <Team>Vélez Sarsfield</Team>
          </div>
          <div>
            <Badge src="" />
            <Team>Flamengo</Team>
          </div>
        </div>
      </div>
      <PlayInfo>Rodada 1</PlayInfo>
    </MatchBox>
  );
}

export default AgendaEsportiva;