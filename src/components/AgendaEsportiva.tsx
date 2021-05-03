import React from 'react';
import { Championship, AgendaWrapper, MatchBox, Header, HeaderItem, MatchPlay, Teams, Badge, Team, PlayInfo } from './AgendaEsportiva.style';
import { Campeonatos, Campeonato, Jogo } from '../common/types/agenda'; 

type Props = {
  championshipEdition: Campeonatos
}

const AgendaEsportiva: React.FC<Props> = ({ championshipEdition }: Props) => {
  return (
    <>
      {championshipEdition.campeonatos.map((item: Campeonato, key: number) => {
        return (
          <div key={`championship-${key}`}>
            <Championship>{item.campeonato}</Championship>
          </div>
        )
      })}
         {championshipEdition.jogos.map((item: Jogo, key: number) => {
           return (
            <AgendaWrapper>
              <MatchBox> 
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
                  <PlayInfo>{item.etapa}</PlayInfo>
                </MatchPlay>
              </MatchBox>
            </AgendaWrapper>
          )
         })} 
    </>
  );
}

export default AgendaEsportiva;