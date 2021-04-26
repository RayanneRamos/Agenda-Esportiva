import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import AgendaEsportiva from './AgendaEsportiva';
import '../setupTests';
import { MatchBox, Header, HeaderItem, MatchPlay, Teams, Badge, Team, PlayInfo } from './AgendaEsportiva.style';
import agenda from '../common/fixtures/agenda';

describe('AgendaEsportiva', () => {
  let agendaEsportiva: ShallowWrapper;

  describe('when component is rendered', () => {
    beforeEach(() => {
      agendaEsportiva = shallow( <AgendaEsportiva /> );
    });

    it('should contain MatchBox', () => {
      const matchBox = agendaEsportiva.find(MatchBox);
      expect(matchBox.length).toBe(1);
    });

    it('should contain Header', () => {
      const header = agendaEsportiva.find(Header);
      expect(header.length).toBe(1);
    });

    it('should contain HeaderItem', () => {
      const headerItem = agendaEsportiva.find(HeaderItem);
      expect(headerItem.length).toBe(2);
    });

    it('should contain MatchPlay', () => {
      const matchPlay = agendaEsportiva.find(MatchPlay);
      expect(matchPlay.length).toBe(1);
    });
    
    it('should contain Teams', () => {
      const teams = agendaEsportiva.find(Teams);
      expect(teams.length).toBe(2);
    })

    it('should contain Badge', () => {
      const badge = agendaEsportiva.find(Badge);
      expect(badge.length).toBe(2);
    });

    it('should contain Team', () => {
      const team = agendaEsportiva.find(Team);
      expect(team.length).toBe(2);
    });

    it('should contain PlayInfo', () => {
      const playInfo = agendaEsportiva.find(PlayInfo);
      expect(playInfo.length).toBe(1);
    });
  });
});
