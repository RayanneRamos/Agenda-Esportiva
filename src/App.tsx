import React from 'react';
import AgendaEsportiva from './components/AgendaEsportiva';
import championshipEditionMock from './common/fixtures/agenda';
import { Campeonatos, Campeonato, Dados } from './common/types/agenda';
import campeonato from './components/ChampionshipWrapper/ChampionshipWrapper';

const App = () => {
  return (
    <AgendaEsportiva 
      championshipEdition={championshipEditionMock as Campeonatos }
      info={championshipEditionMock as Dados} 
      championship={campeonato as unknown as Campeonato} 
    />
  );
}

export default App;
        