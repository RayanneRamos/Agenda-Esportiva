import React from 'react';
import { ChampionshipContent, Championship } from './AgendaEsportiva.style';
import { Campeonatos, Campeonato, Jogo } from '../common/types/agenda'; 
import AgendaWrapper from './AgendaWrapper/AgendaWrapper';

type Props = {
  championshipEdition: Campeonatos

}

const AgendaEsportiva: React.FC<Props> = ({ championshipEdition }: Props) => {
  return (
    <>
      {championshipEdition.campeonatos.map((item: Campeonato, key: number) => {
        return (
          <>
            <ChampionshipContent key={`championship-${key}`}>
              <Championship>{item.campeonato}</Championship>
            </ChampionshipContent>
            {item.jogos.map((item: Jogo, key: number) => {
              return <AgendaWrapper agenda={item} key={`agendaWrapper-${key}`} />
            })}
          </>
        )
      })}
    </>
  );
}

export default AgendaEsportiva;