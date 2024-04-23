import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
`;

export const Header = styled.h1`
  display: flex;
  justify-content: center;
  margin: 40px 0 20px;
  font-family: "GmarketSans";
  font-size: 40px;
  color: ${({ theme }) => theme.color.primary_normal};

  @media ${({ theme }) => theme.windowSize.medium} {
    font-size: 30px;
  }

  @media ${({ theme }) => theme.windowSize.small} {
    font-size: 24px;
  }

  h2::after {
    content: "";
    display: block;
    width: 75%;
    height: 1px;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0.2);
    transform: translateX(15%);
  }
`;

export const InstaWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1000px;
  gap: 20px;
`;

export const MoreButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 20%;
  min-width: 150px;
  height: 50px;
  margin: 50px 0;
  word-break: keep-all;
  background-color: ${({ theme }) => theme.color.primary_normal};
  color: ${({ theme }) => theme.color.primary_light};
  font-size: 20px;
  font-family: "NanumSquareNeo";
  border-radius: 10px;
`;
