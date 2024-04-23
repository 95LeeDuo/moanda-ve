import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  .swiper-slide {
    background-color: #e7e2dc;
    display: flex;
    justify-content: center;
  }
`;

export const FirstSlide = styled.div`
  padding: 0 20px;
`;

export const FirstSlideImg = styled.div`
  background-color: #e7e2dc;
  display: flex;
  justify-content: center;
  width: 100%;

  .logo {
    width: 500px;
    height: 250px;

    @media ${({ theme }) => theme.windowSize.medium} {
      width: 100%;
      height: 100%;
    }
  }
  .flex {
    display: flex;
    .postitImg {
      height: 100%;
      width: 100%;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  @media ${({ theme }) => theme.windowSize.xlarge} {
    flex-direction: column;
    align-items: center;
    .logo {
      margin-top: 50px;
    }
    img {
      height: 100%;
      width: 100%;
    }
  }
`;

export const FirstSlideText = styled.div`
  font-size: 14px;
  font-family: "NanumSquareNeo";
  line-height: 25px;
  word-break: keep-all;
  padding-bottom: 200px;
  h1 {
    font-weight: 600;
  }
  @media ${({ theme }) => theme.windowSize.xlarge} {
    padding: 0;
  }
`;

export const SecondSlide = styled.div`
  background-color: #b19f7f;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    max-width: 1000px;
    max-height: 1000px;
  }
  div {
    display: none;
  }

  @media ${({ theme }) => theme.windowSize.xlarge} {
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      font-family: "NanumSquareNeo";
      color: ${({ theme }) => theme.color.primary_light};
      line-height: 30px;
      padding: 50px 30px;
      h1 {
        text-align: center;
      }
    }
  }
`;

export const NavigationBar = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  padding: 20px 0;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.6);

  @media ${({ theme }) => theme.windowSize.large} {
    width: 120px;
    font-size: 12px;
    bottom: 2%;
    padding: 16px 0;
  }
  @media ${({ theme }) => theme.windowSize.medium} {
    width: 100px;
    font-size: 12px;
    bottom: 2%;
    padding: 12px 0;
  }
  p {
    display: flex;
    justify-content: center;
    gap: 10px;
    font-family: "NanumSquareNeo";
    color: white;

    span {
      text-align: center;
      width: 10%;
    }
  }
`;
