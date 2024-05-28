import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const AddPlayerButton = styled.button`
  padding: 8px;
  color: #fff;
  background-color: dodgerblue;
  border-radius: 6px;
  border: none;
`;

export const Modal = styled.dialog`
  padding: 12px;
  position: relative;
  border-radius: 4px;
  border: 1px solid dodgerblue;
  width: 400px;
  & h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  & label {
    padding-bottom: 4px;
    width: 100%;
  }
  & input {
    padding: 4px;
    width: 90%;
    margin-top: 8px;
  }
  & .flex-box {
    padding: 4px 8px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    & button {
      padding: 8px;
      border-radius: 6px;
      border: none;
    }
    & .cancel {
      color: #fff;
      background-color: red;
    }
    & .save {
      color: #fff;
      background-color: dodgerblue;
    }
  }
`;
