import React from 'react';
import AgendaEsportiva from './components/AgendaEsportiva';
import championshipEditionMock from './common/fixtures/agenda';
import { Campeonatos } from './common/types/agenda';

const App = () => {
  return (
    <AgendaEsportiva championshipEdition={championshipEditionMock as Campeonatos } />
  );
}

export default App;
        