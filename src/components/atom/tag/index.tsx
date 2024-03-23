import styled from 'styled-components';
interface TagProps {
  $active?: boolean;
}

const Tag = styled.div<TagProps>`
  display: flex;
  align-items: center;
  height: 29px;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 1px solid ${(props) => (props.$active ? 'var(--green-6)' : 'var(--grey-3)')};
  border-radius: 15px;

  background-color: ${(props) => (props.$active ? 'rgba(220, 248, 219, 0.3)' : '')};
  color: ${(props) => (props.$active ? 'var(--green-7)' : 'var(--grey-6)')};
  font-size: 13px;

  transition: transform 0.1s ease;
  //드래그 방지
  user-select: none;

  &:active {
    transform: scale(0.95);
  }

  .close {
    display: grid;
    place-items: center;
    height: 22px;
    padding-left: 4px;
  }
`;

export default Tag;
