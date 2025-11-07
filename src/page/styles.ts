import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  font-family: sans-serif;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h2`
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const BestDayText = styled.p`
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
`;

export const THead = styled.thead`
  background-color: #007bff;
  color: white;
`;

export const TBody = styled.tbody``;

export const TR = styled.tr<{ isBest?: boolean }>`
  background-color: ${(props) => (props.isBest ? "#d4edda" : "white")};
  &:nth-child(even) {
    background-color: ${(props) => (props.isBest ? "#d4edda" : "#f2f2f2")};
  }
`;

export const TH = styled.th`
  padding: 10px;
  text-align: left;
  font-weight: bold;
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
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

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 5px;

    .responsiveClass {
      display: none;
    }
  }
`;
export const TDAY = styled.div`
  display: flex;
  justify-content: space-between;

`;
