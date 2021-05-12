import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import AgendaEsportiva from './AgendaEsportiva';
import '../setupTests';
import { ChampionshipContent, Championship, HeaderPrincipal, HeaderTitle, Link, Title } from './AgendaEsportiva.style';
import { Campeonatos, Dados } from '../common/types/agenda';
import championshipEditionMock from '../common/fixtures/agenda';

describe('AgendaEsportiva', () => {
  let agendaEsportiva: ShallowWrapper;

  describe('when component is rendered', () => {
    beforeEach(() => {
      agendaEsportiva = shallow( <AgendaEsportiva championshipEdition={championshipEditionMock as Campeonatos} info={championshipEditionMock as Dados} /> );
    });

    it('should contain HeaderPrincipal', () => {
      const headerPrincipal = agendaEsportiva.find(HeaderPrincipal);
      expect(headerPrincipal.length).toBe(1);
    });

    it('should contain HeaderTitle', () => {
      const headerTitle = agendaEsportiva.find(HeaderTitle);
      expect(headerTitle.length).toBe(1);
    });

    it('should contain Link', () => {
      const link = agendaEsportiva.find(Link);
      expect(link.length).toBe(1);
    });

    it('should contain Title', () => {
      const title = agendaEsportiva.find(Title);
      expect(title.length).toBe(1);
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
