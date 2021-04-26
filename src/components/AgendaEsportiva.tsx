import React from 'react';
import { MatchBox, Header, HeaderItem, MatchPlay, Teams, Badge, Team, PlayInfo } from './AgendaEsportiva.style';
import agenda from '../common/fixtures/agenda';

function AgendaEsportiva() {
  return (
    <MatchBox>
      <Header>
        <HeaderItem>{agenda.modalidade}</HeaderItem>
        <HeaderItem>{agenda.hora}</HeaderItem>
      </Header>
      <MatchPlay>
        <div>
          <Teams>
            <Badge src={agenda.mandante.urlImagem} />
            <Team>{agenda.mandante.nome}</Team>
          </Teams>
          <Teams>
            <Badge src={agenda.visitante.urlImagem} />
            <Team>{agenda.visitante.nome}</Team>
          </Teams>
        </div>
      </MatchPlay>
      <PlayInfo>{agenda.etapa}</PlayInfo>
    </MatchBox>
  );
}

export default AgendaEsportiva;