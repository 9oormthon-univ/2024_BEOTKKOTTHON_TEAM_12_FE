import { useState } from 'react';
import styled from 'styled-components';

interface ToggleProps {
  $isOn: boolean;
}

const ToggleWrapper = styled.div<ToggleProps>`
  position: relative;
  width: 36px;
  height: 18px;
  border-radius: 25px;
  background-color: ${({ $isOn }) => ($isOn ? 'var(--green-primary)' : 'var(--grey-4)')};
`;

const ToggleButton = styled.div<ToggleProps>`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: white;
  transition: transform 0.3s ease;
  transform: ${({ $isOn }) => ($isOn ? 'translateX(18px)' : 'translateX(0)')};
`;

const Toggle = () => {
  const [$isOn, setIsOn] = useState(false);

  return (
    <ToggleWrapper $isOn={$isOn} onClick={() => setIsOn(!$isOn)}>
      <ToggleButton $isOn={$isOn} />
    </ToggleWrapper>
  );
};

export default Toggle;
