import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import HeaderWrapper from './HeaderWrapper';
import { HeaderPrincipal, HeaderTitle, Link, Title } from './HeaderWrapper.style';
import { Dados } from '../../common/types/agenda';
import { info } from 'console';

describe('HeaderWrapper', () => {
  let headerWrapper: ShallowWrapper;

  describe('when component is rendered', () => {
    beforeEach(() => {
      headerWrapper = shallow ( <HeaderWrapper info={info as unknown as Dados} /> );
    });

    it('should contain HeaderPrincipal', () => {
      const headerPrincipal = headerWrapper.find(HeaderPrincipal);
      expect(headerPrincipal.length).toBe(1);
    });

    it('should contain HeaderTitle', () => {
      const headerTitle = headerWrapper.find(HeaderTitle);
      expect(headerTitle.length).toBe(1);
    });

    it('should contain Link', () => {
      const link = headerWrapper.find(Link);
      expect(link.length).toBe(1);
    });

    it('should contain Title', () => {
      const title = headerWrapper.find(Title);
      expect(title.length).toBe(1);
    });
  });
});