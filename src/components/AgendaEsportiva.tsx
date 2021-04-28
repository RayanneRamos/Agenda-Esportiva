import React from 'react';
import { Championship, AgendaWrapper, MatchBox, Header, HeaderItem, MatchPlay, Teams, Badge, Team, PlayInfo } from './AgendaEsportiva.style';
import { Campeonato, Jogo } from '../common/types/agenda'; 

type Props = {
  championshipEdition: Campeonato
}

const AgendaEsportiva: React.FC<Props> = ({ championshipEdition }: Props) => {
  return (
    <>
    <Championship>{championshipEdition.campeonato}</Championship>
      {championshipEdition.jogos.map((item: Jogo, key: number) => {
        return (
          <AgendaWrapper>
            <MatchBox key={`matchBox-${key}`}> 
              <Header>
                <HeaderItem>{item.modalidade}</HeaderItem>
                <HeaderItem>{item.hora}</HeaderItem>
              </Header>
            <MatchPlay>
              <Teams>
                <Badge src={item.mandante.urlImagem} />
                <Team>{item.mandante.nome}</Team>
              </Teams>
              <Teams>
                <Badge src={item.visitante.urlImagem} />
                <Team>{item.visitante.nome}</Team>
              </Teams>
              <PlayInfo key={key}>{item.etapa}</PlayInfo>
            </MatchPlay>
            </MatchBox>
          </AgendaWrapper>
        )
      })}
    </>
  );
}

export default AgendaEsportiva;