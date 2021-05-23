import React from 'react';
import { ChampionshipContent, Championship } from './ChampionshipWrapper.style';
import { Campeonato } from '../../common/types/agenda';

type Props = {
  title: Campeonato
}


const ChampionshipWrapper: React.FC<Props> = ({ title }: Props) => {
  return (
    <ChampionshipContent>
      <Championship>{title.campeonato}</Championship>
    </ChampionshipContent>
  );
}

export default ChampionshipWrapper;