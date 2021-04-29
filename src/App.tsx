import React from 'react';
import AgendaEsportiva from './components/AgendaEsportiva';
import championshipEditionMock from './common/fixtures/agenda';
import { Campeonato } from './common/types/agenda';

const App = () => {
  return (
    <AgendaEsportiva championshipEdition={championshipEditionMock as Campeonato} />
  );
}

export default App;
