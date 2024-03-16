import { TextLabel } from '@components/index';
import styled from 'styled-components';

export const BackIcon = styled.img`
  transform: translate(11px) rotate(180deg); /* 왼쪽 화살표*/
`;

export const HederLeft = styled(TextLabel)`
  padding: 10px;
`;

export const Link = styled.div`
  width: 100%;
  margin-top: 30px;
  color: var(--grey-7);
  font-size: 13px;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const InputWrapper = styled.div`
  padding: 15px 0;
`;
