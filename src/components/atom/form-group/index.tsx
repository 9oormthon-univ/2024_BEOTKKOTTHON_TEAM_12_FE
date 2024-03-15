import styled from 'styled-components';

interface FormGroupProps {
  $imglen?: number;
}

const FormGroup = styled.div<FormGroupProps>`
  margin-bottom: 30px;

  .label {
    margin-bottom: 8px;
    font-size: 15px;
    font-weight: bold;
    color: var(--grey-7);

    .sub {
      color: ${(props) => (props.$imglen === 0 ? 'var(--grey-4)' : 'var(--green-6)')};
    }
  }
`;

export default FormGroup;
