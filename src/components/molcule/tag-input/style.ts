import styled from 'styled-components';

interface TagInputWrapperProps {
  $padding?: string;
}

export const TagInputWrapper = styled.div<TagInputWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: ${(props) => props.$padding || ''};
`;
export const SelectTagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 -20px;
  gap: 5px;
  cursor: pointer;
`;
