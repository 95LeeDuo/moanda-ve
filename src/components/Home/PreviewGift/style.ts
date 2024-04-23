import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  width: 100%;
  text-align: center;
  overflow: hidden;

  @media ${({ theme }) => theme.windowSize.medium} {
    height: 100%;
  }
`;

export const GiftHeader = styled.h2`
  position: absolute;
  top: 0;
  right: 0;
  font-family: "TTLaundryGothicB";
  letter-spacing: 2px;
  /* font-size: 80px; */
  font-size: 100px;
  font-weight: 600;
  line-height: 1.2;
  z-index: 10;
  text-align: left;

  span {
    display: block;
    padding-left: 120px;
    white-space: nowrap;
  }

  @media ${({ theme }) => theme.windowSize.xlarge} {
    font-size: 90px;
  }

  @media ${({ theme }) => theme.windowSize.large} {
    font-size: 80px;
  }

  @media ${({ theme }) => theme.windowSize.medium} {
    position: static;
    margin-top: 80px;
    font-size: 40px;
    padding: 0 20px;

    span {
      padding-left: 60px;
    }
  }
`;

export const LinkToGift = styled(Link)`
  position: absolute;
  top: -90px;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "NanumSquareNeo";
  font-size: 20px;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.primary_light};
  padding: 20px 30px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.primary_normal};

  @media ${({ theme }) => theme.windowSize.xlarge} {
    right: 5%;
  }

  @media ${({ theme }) => theme.windowSize.large} {
    right: 5%;
  }

  @media ${({ theme }) => theme.windowSize.medium} {
    display: none;
  }
`;

export const SwiperContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  margin-top: 80px;

  @media ${({ theme }) => theme.windowSize.medium} {
    height: auto;
    margin: 40px 0 50px;
  }
`;

export const SwiperWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: 550px;
  transform: translate(-50%, -50%);
  height: 80%;
  width: 100%;
  max-height: 550px;

  max-width: 1360px;

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }

  .swiper {
    .swiper-pagination {
      display: none;
    }
    .swiper-wrapper {
      align-items: end;
      margin-left: 92px;
      height: 100%;

      .swiper-slide {
        width: 215px !important;
        height: 50%;
        display: flex;
        justify-content: center;
        img {
          border-radius: 12px;
          width: 100%;
          height: 100%;
        }
      }
      .swiper-slide-active {
        width: 430px !important;
        height: 100%;
      }

      .swiper-slide-prev {
        /* visibility: hidden; */
      }
    }
  }

  @media ${({ theme }) => theme.windowSize.medium} {
    position: static;
    transform: none;
    max-height: initial;
    width: 100%;
    height: auto;
    margin: 0 auto;

    .swiper {
      height: auto;
      margin-top: 20px;
      .swiper-pagination {
        display: block;
        bottom: 40px;
        .swiper-pagination-bullet {
          border-radius: 0;
          height: 1px;
          width: 12px;
          vertical-align: middle;
          transition-duration: 300ms;
        }
        .swiper-pagination-bullet-active {
          background-color: ${({ theme }) => theme.color.primary_normal};
          height: 12px;
          border-radius: 25px;
        }
      }
      .swiper-wrapper {
        align-items: start;
        margin-left: 0;
        height: auto;
        .swiper-slide {
          width: 100% !important;
          display: flex;
          justify-content: center;
          height: auto !important;
          img {
            position: static;
            transform: none;
            border-radius: 12px;
            margin: 0 20px;
            width: 90%;
            max-width: 450px;
            max-height: 600px;
            height: 100%;
            /* object-fit: cover; */
          }
        }

        .swiper-slide-prev {
          visibility: visible;
        }
      }
    }
  }
`;

export const SwiperPagination = styled(Link)`
  display: none;
  @media ${({ theme }) => theme.windowSize.medium} {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -30px;
    max-width: 400px;
    width: 100%;
    background-color: #242424;
    z-index: 10;
    color: ${({ theme }) => theme.color.primary_light};
    line-height: 60px;
    font-family: "NanumSquareNeo";
    letter-spacing: 2px;
    font-size: 18px;
    border-radius: 6px;
  }

  @media ${({ theme }) => theme.windowSize.small} {
    max-width: 300px;
  }

  svg {
    vertical-align: middle;
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
  }
`;
