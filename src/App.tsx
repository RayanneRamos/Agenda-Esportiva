import React from 'react';
import AgendaEsportiva from './components/AgendaEsportiva';
import championshipEditionMock from './common/fixtures/agenda';
import { Campeonatos, Dados } from './common/types/agenda';

const App = () => {
  return (
    <AgendaEsportiva championshipEdition={championshipEditionMock as Campeonatos } info={championshipEditionMock as Dados} />
  );
}

export default App;
        