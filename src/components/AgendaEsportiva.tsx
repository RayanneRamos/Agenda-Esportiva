import React from 'react';
import { ChampionshipContent, Championship, HeaderPrincipal, HeaderTitle, Link, Title } from './AgendaEsportiva.style';
import { Campeonatos, Campeonato, Jogo, Dados } from '../common/types/agenda'; 
import AgendaWrapper from './AgendaWrapper/AgendaWrapper';

type Props = {
  championshipEdition: Campeonatos
  info: Dados
}

const AgendaEsportiva: React.FC<Props> = ({ championshipEdition, info }: Props) => {
  return (
    <>
      <HeaderPrincipal>
        <HeaderTitle>
          <Link href={info.link}>
            <Title>{info.nome}</Title>
          </Link>
        </HeaderTitle>
      </HeaderPrincipal>  
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