import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import AgendaEsportiva from './AgendaEsportiva';
import '../setupTests';
import { ChampionshipContent, Championship } from './AgendaEsportiva.style';
import { Campeonatos } from '../common/types/agenda';
import championshipEditionMock from '../common/fixtures/agenda';

describe('AgendaEsportiva', () => {
  let agendaEsportiva: ShallowWrapper;

  describe('when component is rendered', () => {
    beforeEach(() => {
      agendaEsportiva = shallow( <AgendaEsportiva championshipEdition={championshipEditionMock as Campeonatos} /> );
    });

    it('should contain ChampionshipContent', () => {
      const championshipContent = agendaEsportiva.find(ChampionshipContent);
      expect(championshipContent.length).toBe(3);
    })

    it('should contain Championship', () => {
      const championship = agendaEsportiva.find(Championship);
      expect(championship.length).toBe(3);
    })
  });
});
