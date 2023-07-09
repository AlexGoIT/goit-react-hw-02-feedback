import styled from 'styled-components';

export const OptionsWrapper = styled.div`
  display: flex;
  gap: 10px;

  button {
    width: 80px;
    height: 40px;
    border-radius: 5px;
    border: none;
    font-size: 18px;
    font-weight: bold;
    background-color: #f1f1f1;
    opacity: 0.75;
    cursor: pointer;
    transition: opacity 0.2s ease-in;
  }

  button:nth-child(1) {
    background-color: green;
  }

  button:nth-child(2) {
    background-color: orange;
  }

  button:nth-child(3) {
    background-color: red;
  }

  button:hover {
    opacity: 1;
  }
`;
