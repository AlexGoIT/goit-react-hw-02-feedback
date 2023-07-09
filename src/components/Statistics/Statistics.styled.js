import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  width: 250px;

  p {
    font-size: 18px;
    font-weight: bold;
  }

  p:nth-child(1) {
    color: green;
  }

  p:nth-child(2) {
    color: orange;
  }

  p:nth-child(3) {
    color: red;
  }
`;
