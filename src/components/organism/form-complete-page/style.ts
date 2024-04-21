import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100svh - var(--nav-size));

  .logo-img {
    margin-bottom: 32.79px;
  }

  .main-text {
    margin-bottom: 19px;
  }

  .sub-text {
    max-width: 253px;
  }
`;

export const ButtonContainer = styled.div`
  display: grid;
  place-items: center;
  height: var(--nav-size);
  padding: 0 20px;
`;
