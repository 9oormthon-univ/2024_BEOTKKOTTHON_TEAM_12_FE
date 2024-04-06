import styled from 'styled-components';

export const BoxUpload = styled.label`
  display: grid;
  place-items: center;
  width: 111px;
  height: 111px;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const Image = styled.img`
  width: 111px;
  height: 111px;
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

export const Container = styled.div`
  & > label {
    display: grid;
    place-items: center;
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border: 1px solid var(--grey-3);
    border-radius: 8px;
  }

  & > input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    border: 0;
  }
`;

export const SectionImgUpload = styled.div`
  width: 111px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;
