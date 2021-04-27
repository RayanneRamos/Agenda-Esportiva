import styled from 'styled-components';

export const MatchBox = styled.div `
  width: 320px;
  height: 120px;
  font-size: 16px;
  border: 2px solid #858585;
  padding: 16px 24px;
  cursor: pointer;
  display: block;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
`;

export const Teams = styled.div `
  display: flex;
  align-items: center;
`;

export const Badge = styled.img `
  width: 24px;
  height: 24px;
  vertical-align: baseline;
  margin-bottom: 5px;
`;

export const Team = styled.span `
  color: #333333;
  font-size: 14px;
  font-family: 'opensans', sans-serif;
  font-weight: 600;
  margin-right: 16px;
  margin-left: 12px;
  vertical-align: baseline;
`;

export const PlayInfo = styled.span `
  display: flex;
  justify-content: flex-start;
  color: #858585;
  margin-left: 10px;
  margin-top: 10px;
`;