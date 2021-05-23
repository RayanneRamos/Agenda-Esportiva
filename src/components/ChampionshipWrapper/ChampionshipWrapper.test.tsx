import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import ChampionshipWrapper from './ChampionshipWrapper';
import { ChampionshipContent, Championship } from './ChampionshipWrapper.style';
import { Campeonato } from '../../common/types/agenda';
import championshipEditionMock from '../../common/fixtures/agenda';
import '../../setupTests';

describe('ChampionshipWrapper', () => {
  let championshipWrapper: ShallowWrapper;

  describe('when component is rendered', () => {
    beforeEach(() => {
      championshipWrapper = shallow ( <ChampionshipWrapper title={championshipEditionMock as unknown as Campeonato} /> );
    });

    it('should contain ChampionshipContent', () => {
      const championshipContent = championshipWrapper.find(ChampionshipContent);
      expect(championshipContent.length).toBe(1);
    });

    it('should contain Championship', () => {
      const championship = championshipWrapper.find(Championship);
      expect(championship.length).toBe(1);
    });
  });
});