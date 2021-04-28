import React from 'react';
import { Championship, MatchBox, Header, HeaderItem, MatchPlay, Teams, Badge, Team, PlayInfo } from './AgendaEsportiva.style';
import { Campeonato, Jogo } from '../common/types/agenda'; 

type Props = {
  championshipEdition: Campeonato
}

const AgendaEsportiva: React.FC<Props> = ({ championshipEdition }: Props) => {
  return (
    <>
      <Championship>{championshipEdition.campeonato}</Championship>
      <MatchBox>
          <Header>
            {championshipEdition.jogos.map((item: Jogo, key: number) => {
              return (
                <div key={key}>
                  <HeaderItem>{item.modalidade}</HeaderItem>
                  <HeaderItem>{item.hora}</HeaderItem>
                </div>
              )
            })}
          </Header>
          <MatchPlay>
              {championshipEdition.jogos.map((item: Jogo, key: number) => {
                return (
                  <div key={key}>
                    <Teams>
                      <Badge src={item.mandante.urlImagem} />
                      <Team>{item.mandante.nome}</Team>
                    </Teams>
                    <Teams>
                      <Badge src={item.visitante.urlImagem} />
                      <Team>{item.visitante.nome}</Team>
                    </Teams>
                  </div>
                )
              })} 
          </MatchPlay>
          {championshipEdition.jogos.map((item: Jogo, key: number) => {
            return <PlayInfo key={key}>{item.etapa}</PlayInfo>
          })}
      </MatchBox>
    </>
  );
}

export default AgendaEsportiva;