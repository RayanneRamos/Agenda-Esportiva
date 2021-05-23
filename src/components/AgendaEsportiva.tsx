import React from 'react';
import { Campeonatos, Campeonato, Jogo, Dados } from '../common/types/agenda'; 
import AgendaWrapper from './AgendaWrapper/AgendaWrapper';
import ChampionshipWrapper from './ChampionshipWrapper/ChampionshipWrapper';
import HeaderWrapper from './HeaderWrapper/HeaderWrapper';

type Props = {
  championshipEdition: Campeonatos
  info: Dados,
  championship: Campeonato
}

const AgendaEsportiva: React.FC<Props> = ({ championshipEdition, info }: Props) => {
  return (
    <>
      <HeaderWrapper info={info} />
      {championshipEdition.campeonatos.map((item: Campeonato, key: number) => {
        return (
          <>
            <ChampionshipWrapper title={item} key={`championshipWrapper-${key}`} />
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