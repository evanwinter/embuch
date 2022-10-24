import styled from "styled-components";

export const ClickZone = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  z-index: 20;
`;

export const ClickZonePrev = styled(ClickZone)`
  left: 0;
`;

export const ClickZoneNext = styled(ClickZone)`
  right: 0;
`;

export const Navigation = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 21;
  display: flex;
  gap: 0.5rem;
`;

export const NavigationButton = styled.button`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  appearance: none;
  border: none;
`;
