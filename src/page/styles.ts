import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    background-color: #fff;
  }
  font-family: sans-serif;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 600px) {
    width: 310px;
    text-align: start;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    font-size: 16px;
    text-align: start;
  }
`;

export const Subtitle = styled.h2`
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const BestDayText = styled.p`
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    text-align: start;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
  display: block;
`;

export const THead = styled.thead`
  background-color: #007bff;
  color: white;
`;

export const TBody = styled.tbody``;

export const TR = styled.tr<{
  isBest?: boolean;
  medioDia?: boolean;
  piorDia?: boolean;
}>`
  background-color: ${(props) =>
    props.isBest ? "#88e29dff" : props.piorDia ? "#f8d7da" : "white"};

  &:nth-child(even) {
    background-color: ${(props) =>
      props.isBest ? "#d4edda" : props.piorDia ? "#f8d7da" : "#f2f2f2"};
  }

  @media (max-width: 600px) {
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
  }
`;

export const TH = styled.th`
  padding: 10px;
  text-align: left;
  font-weight: bold;
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 6px;
    padding: 5px;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

export const Spinner = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #007bff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 15px;
`;

export const LoadingText = styled.p`
  font-size: 18px;
  color: #007bff;
  font-weight: bold;
`;

export const TD = styled.td`
  padding: 10px;
  text-align: left;
  font-size: 14px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 12px;
    padding: 5px;
    font-size: 10px;

    .responsiveClass {
      display: none;
    }
  }
`;
export const TDAY = styled.div`
  display: flex;
  justify-content: space-between;
  width: 210px;

  @media (max-width: 600px) {
    width: 63px;
  }
`;

export const ContainerAviso = styled.div`
  .melhor {
    background-color: #d4edda;
    color: #155724;
    width: 220px;
  }

  .pior {
    margin-top: 4px;
    background-color: #f8d7da;
    color: #721c24;
    width: 220px;
  }
`;
