import React from 'react';
import { AgendaContent, MatchBox, Header, HeaderItem, MatchPlay, Link, Teams, Badge, Team, PlayInfo } from './AgendaWrapper.style';
import { Jogo } from '../../common/types/agenda';

type Props = {
  agenda: Jogo
}

const AgendaWrapper: React.FC<Props> = ({ agenda }: Props) => {
  return (
    <AgendaContent>
      <MatchBox>
        <Header>
          <HeaderItem>{agenda.modalidade}</HeaderItem>
          <HeaderItem>{agenda.hora}</HeaderItem>
        </Header>
        <MatchPlay>
          <Link href={agenda.link}>
            <Teams>
              <Badge src={agenda.mandante.urlImagem} />
              <Team>{agenda.mandante.nome}</Team>
            </Teams>
            <Teams>
              <Badge src={agenda.visitante.urlImagem} />
              <Team>{agenda.visitante.nome}</Team>
            </Teams>
          </Link>
          <PlayInfo>{agenda.etapa}</PlayInfo>
        </MatchPlay>        
      </MatchBox>
    </AgendaContent>
  )
}

export default AgendaWrapper;