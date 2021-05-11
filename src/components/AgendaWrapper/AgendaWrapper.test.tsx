import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import AgendaWrapper from './AgendaWrapper';
import '../../setupTests';
import { AgendaContent, MatchBox, Header, HeaderItem, MatchPlay, Link, Teams, Badge, Team, PlayInfo } from './AgendaWrapper.style';

describe('AgendaWrapper', () => {
  let agendaWrapper: ShallowWrapper;

  describe('when component is rendered', () => {
    const agendaMock = {
      modalidade: 'futebol',
      etapa: 'Rodada 1',
      data: '2021-04-20',
      hora: '19:15',
      link: "https://globoesporte.globo.com/rs/futebol/libertadores/jogo/20-04-2021/always-ready-internacional.ghtml",
      mandante: {
        nome: 'Argentino Juniors',
        urlImagem: 'https://s.glbimg.com/es/sde/f/organizacoes/2011/01/26/argentino_juniors.png'
      },
      visitante: {
        nome: 'Nacional-URU',
        urlImagem: 'https://s.glbimg.com/es/sde/f/organizacoes/2019/02/18/nacional-uru-svg-13086.svg',
      } 
    }
    beforeEach(() => {
      agendaWrapper = shallow ( <AgendaWrapper agenda={agendaMock} />);

    });

    it('should contain AgendaContent', () => {
      const agendaContent = agendaWrapper.find(AgendaContent);
      expect(agendaContent.length).toBe(1);
    });

    it('should contain MatchBox', () => {
      const matchBox = agendaWrapper.find(MatchBox);
      expect(matchBox.length).toBe(1);
    });

    it('should contain Header', () => {
      const header = agendaWrapper.find(Header);
      expect(header.length).toBe(1);
    });

    it('should contain headerItem', () => {
      const headerItem = agendaWrapper.find(HeaderItem);
      expect(headerItem.length).toBe(2);
    });

    it('should contain MatchPlay', () => {
      const matchPlay = agendaWrapper.find(MatchPlay);
      expect(matchPlay.length).toBe(1);
    });

    it('should contain Link', () => {
      const link = agendaWrapper.find(Link);
      expect(link.length).toBe(1);
    });

    it('should contain Teams', () => {
      const teams = agendaWrapper.find(Teams);
      expect(teams.length).toBe(2);
    });

    it('should contain Badge', () => {
      const badge = agendaWrapper.find(Badge);
      expect(badge.length).toBe(2);
    });

    it('should contain Team', () => {
      const team = agendaWrapper.find(Team);
      expect(team.length).toBe(2);
    });
    
    it('should contain PlayInfo', () => {
      const playInfo = agendaWrapper.find(PlayInfo);
      expect(playInfo.length).toBe(1);
    });
  });
});