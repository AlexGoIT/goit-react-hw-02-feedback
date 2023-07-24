import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  min-width: 320px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  .option-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .option-name {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .option-count {
    font-size: 20px;
  }

  /* p:nth-child(1) {
    color: green;
  }

  p:nth-child(2) {
    color: orange;
  }

  p:nth-child(3) {
    color: red;
  } */
`;

export const ResultWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  p:nth-child(1) {
    font-size: 20px;
    font-weight: bold;
  }
`;
