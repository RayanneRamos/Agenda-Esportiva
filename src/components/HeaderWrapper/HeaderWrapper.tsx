import React from 'react';
import { HeaderPrincipal, HeaderTitle, Link, Title } from './HeaderWrapper.style';
import { Dados } from '../../common/types/agenda';

type Props = {
  info: Dados
}

const HeaderWrapper: React.FC<Props> = ({ info }: Props) => {
  return (
    <HeaderPrincipal>
      <HeaderTitle>
        <Link href={info.link}>
          <Title>{info.nome}</Title>
        </Link>
      </HeaderTitle>
    </HeaderPrincipal>
  );
}

export default HeaderWrapper;