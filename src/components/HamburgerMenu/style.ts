import styled, { css } from "styled-components";

export const Container = styled.div`
  display: none;

  @media ${({ theme }) => theme.windowSize.medium} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    z-index: 50;
  }
`;

export const ClickArea = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 22px;
  height: 20px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const AreaElement = styled.span<{
  $isClicked: boolean;
  rotate: number;
  opacity: number;
  translate: number;
}>`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.color.primary_normal};
  transition: all 200ms ease-out;

  ${props =>
    props.$isClicked &&
    css`
      rotate: ${props.rotate}deg;
      opacity: ${props.opacity};
      transform: translateY(${props.translate}px) translateX(-25%);
      background-color: ${({ theme }) => theme.color.primary_light};
    `}
`;
