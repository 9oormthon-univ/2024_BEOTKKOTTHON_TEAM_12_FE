import styled from 'styled-components';

export const BoxUpload = styled.label`
  display: grid;
  place-items: center;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const RemoveInput = styled.input`
  opacity: 0;
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  border: 0;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  gap: 10px;
`;
