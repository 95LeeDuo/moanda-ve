import styled from "styled-components";

export const Container = styled.header<{ $isScrolled: boolean }>`
  width: 100%;
  min-width: 320px;
  height: ${({ $isScrolled }) => ($isScrolled ? "60px" : "81px")};

  position: fixed;
  top: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.color.primary_light};
  box-shadow: 0px 4px 13px -5px rgba(50, 50, 93, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  font-family: "NanumSquareNeo";
  transition-duration: 300ms;

  /* Tablet, Mobile */
  @media ${({ theme }) => theme.windowSize.medium} {
    width: calc(100vw - 20px);
    justify-content: space-between;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 1000px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;

  img {
    width: 120px;
  }

  .toHome {
    display: none;
  }

  /* Tablet */
  @media ${({ theme }) => theme.windowSize.medium} {
    display: block;
    width: auto;
    font-weight: 400;
    .toHome {
      display: block;
    }
    a {
      img {
        width: 90px;
      }
    }

    div {
      a {
        font-size: 14px;
      }
    }
  }

  /* Mobile */
  @media ${({ theme }) => theme.windowSize.small} {
  }
`;

export const Menus = styled.div<{ $isClicked: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-around;

  div {
    a {
      display: inline-block;
      color: #242424;
      cursor: pointer;
      padding: 4px;
      transition-duration: 300ms;
      @media (hover: hover) {
        &:hover {
          color: ${({ theme }) => theme.color.primary_normal};
          transform: translateY(-5px);
        }
      }
    }
    .active {
      color: ${({ theme }) => theme.color.primary_normal};
    }
  }
  .mobile_wrapper {
    display: none;
  }

  /* Tablet, Mobile */
  @media ${({ theme }) => theme.windowSize.medium} {
    display: block;
    .mobile_wrapper {
      display: ${({ $isClicked }) => ($isClicked ? "block" : "none")};
      position: fixed;
      top: 0;
      left: 140px;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0);
      opacity: 0.2;
      transform: none;
      transition: none;
    }

    visibility: ${({ $isClicked }) => ($isClicked ? "inherit" : "hidden")};
    position: fixed;
    top: 0;
    left: 0;
    width: 140px;
    height: 100%;

    padding-top: 20%;
    background-color: ${({ theme }) => theme.color.primary_normal};
    opacity: ${({ $isClicked }) => ($isClicked ? "1" : "0")};
    transition: all 0.3s ease-in-out;

    div {
      width: 100%;
      line-height: 48px;
      text-align: center;
      transform: translateY(${({ $isClicked }) => ($isClicked ? "0%" : "-100%")});
      transition: transform 0.3s ease-in-out;
      a {
        display: inline-block;
        color: ${({ theme }) => theme.color.primary_light};
        width: 90%;
        border-radius: 10px;
        z-index: 100;

        &:hover {
          color: inherit;
          transform: none;
        }
      }
      .active {
        color: #242424;
        background-color: ${({ theme }) => theme.color.primary_light};
      }
    }
  }
`;

export const WindowSizeMobile = styled.div`
  @media ${({ theme }) => theme.windowSize.medium} {
    width: 34px;
    height: 100%;
  }
`;
