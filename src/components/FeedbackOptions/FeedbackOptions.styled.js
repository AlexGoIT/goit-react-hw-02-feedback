import styled from 'styled-components';

export const OptionsWrapper = styled.div`
  display: flex;
  gap: 10px;

  .optionButton {
    min-width: 120px;
    height: 40px;
    border-radius: 5px;
    border: none;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    opacity: 0.8;
    transition: box-shadow 0.2s ease-in, opacity 0.2s ease-in;

    &:is(:hover, :focus) {
      opacity: 1;
    }
  }
`;
