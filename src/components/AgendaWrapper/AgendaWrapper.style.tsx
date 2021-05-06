import styled from 'styled-components';

export const AgendaContent = styled.div `
  display: inline-block;
`;

export const MatchBox = styled.div `
  width: 270px;
  height: 120px;
  font-size: 14px;
  border: 1px solid #e8e8e8;
  padding: 16px 24px;
  font-family: "Open Sans", sans-serif;
`;

export const Header = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-right: 10px;
`;

export const HeaderItem = styled.span `
  color: #858585;
  margin-bottom: 10px;
`;

export const MatchPlay = styled.div `
  margin-bottom: 10px;
  font-size: 14px;
`;

export const Teams = styled.div `
  display: flex;
  align-items: center;
`;

type ImgProps = {
  src: string
}

export const Badge = styled.img<ImgProps> `
  width: 24px;
  height: 24px;
  vertical-align: baseline;
  margin-bottom: 5px;
`;

export const Team = styled.span `
  color: #333333;
  font-size: 12px;
  font-weight: 600;
  margin-right: 16px;
  margin-left: 12px;
  vertical-align: baseline;
`;

export const PlayInfo = styled.span `
  display: flex;
  justify-content: flex-start;
  color: #858584;
  margin-top: 10px;
`;