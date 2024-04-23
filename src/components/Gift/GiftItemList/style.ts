import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const GiftItems = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "NanumSquareNeo";
  font-weight: 400;
  font-style: normal;

  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 13px;
  }
  @media ${({ theme }) => theme.windowSize.medium} {
    max-width: 100%;
  }
  .observer {
    &.visible {
      animation: ${fadeIn} 1.5s ease-out forwards;
    }
    opacity: 0;
  }
`;

export const Contact = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin: 20px;
  @media ${({ theme }) => theme.windowSize.medium} {
    flex-direction: column;
    gap: 10px;
  }
  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 16px;
    font-size: 18px;
    @media ${({ theme }) => theme.windowSize.medium} {
      font-size: 16px;
    }
    p {
      line-height: 50px;
      padding-left: 10px;
      color: #555;
    }
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    @media ${({ theme }) => theme.windowSize.medium} {
      width: 40px;
      height: 40px;
    }
  }

  button {
    border-radius: 50%;
    padding: 10px;
    border: none;
    width: 50px;
    height: 50px;
    background-color: #fff;
    @media ${({ theme }) => theme.windowSize.medium} {
      width: 40px;
      height: 40px;
    }
    svg {
      width: 30px;
      height: 30px;
      @media ${({ theme }) => theme.windowSize.medium} {
        width: 20px;
        height: 20px;
      }
    }
  }
  .call {
    color: #7e7;
  }
`;

export const GiftLine = styled.span`
  width: 90%;
  height: 1px;
  background-color: #7b5039;
  display: block;
  margin-bottom: 10px;
  opacity: 0.5;
`;

export const GiftTitle = styled.img``;

export const GiftItem = styled.div`
  margin: 100px 0;
  font-family: "NanumSquareNeo";
  border: 1px solid #b1825e;
  padding: 0 20px;
  border-radius: 50px;

  .subtitle {
    padding-top: 20px;
    letter-spacing: 2px;
    font-size: 24px;
    color: ${({ theme }) => theme.color.primary_normal};
    font-weight: 600;
  }
`;

export const GiftItemHeader = styled.div`
  margin: 20px 0;
  p {
    font-size: 36px;
    letter-spacing: 2px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.primary_normal};
    line-height: 40px;
    text-align: center;
    padding-top: 7px;
    @media ${({ theme }) => theme.windowSize.medium} {
      font-size: 30px;
    }
    @media ${({ theme }) => theme.windowSize.small} {
      font-size: 25px;
    }
  }
`;
export const GiftItemBoxImg = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .swiper {
    border-top: 2px solid #b1825e;
    border-bottom: 2px solid #b1825e;
    padding: 15px 5px;
    display: flex;
    justify-content: center;
    max-width: 800px;
    @media ${({ theme }) => theme.windowSize.medium} {
      max-width: 425px;
    }
    @media ${({ theme }) => theme.windowSize.small} {
      max-width: 300px;
    }

    .swiper-pagination {
      bottom: 45px;

      .swiper-pagination-bullet {
        border-radius: 0;
        height: 1px;
        vertical-align: middle;
        transition-duration: 300ms;
      }
      .swiper-pagination-bullet-active {
        background-color: ${({ theme }) => theme.color.primary_normal};
        height: 8px;
        border-radius: 25px;
      }
    }
  }
  .swiperSlide {
    height: 335px;
    img {
      border-radius: 20px;
      width: 250px;
      height: 312px;
    }
    p {
      height: 28px;
      line-height: 28px;
    }
  }
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const GiftItemImg = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.windowSize.medium} {
    flex-direction: column;
  }
  div {
    border-radius: 10px;
    width: 100%;
    padding: 10px;

    img {
      min-width: 180px;
      width: 100%;
      height: 300px;
      border-radius: 10px;
      border: 2px solid #b1825e;

      object-fit: cover;
    }

    div {
      margin-bottom: 10px;
      border: none;
      padding: 10px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;

      h1 {
        white-space: nowrap;
        font-size: 18px;
        margin-bottom: 10px;

        color: #b1825e;
        text-align: center;
      }
      h2 {
        font-size: 16px;

        color: gray;
      }
    }
  }
  h1 {
    font-size: 20px;
  }
`;

export const GiftItemInfo = styled.div`
  width: 100%;
  margin-bottom: 20px;
  line-height: 20px;

  p {
    font-size: 13px;
    color: #b1825e;
  }
`;
