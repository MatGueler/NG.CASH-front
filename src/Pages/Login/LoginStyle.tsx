import styled from "styled-components";

export const Infos = styled.div`
  position: fixed;
  right: 30px;
  top: 30px;
  cursor: pointer;

  svg {
    font-size: 3em;
    color: #ffffff;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;

  border-radius: 5px;
  border: 0;

  padding: 0 10px;

  font-size: 20px;
  font-family: "Raleway", sans-serif;
  color: #000000;
  box-sizing: border-box;
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  box-sizing: border-box;

  h1 {
    font-family: "Saira Stencil One", cursive;
    font-size: 10em;
    color: #ffffff;
  }

  h2 {
    font-size: 15px;
    color: #ffffff;

    margin: 20px;
  }

  form {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .error-message {
      width: 100%;
      padding-left: 10px;
      margin-top: 10px;

      font-weight: bold;
      color: red;
      border-left: 3px solid red;

      box-sizing: border-box;
    }

    .input-group {
      width: 100%;
      margin-bottom: 20px;
    }
  }

  .button-box {
    width: 50%;
    height: 45px;
    position: relative;
    background-color: black;

    border-radius: 5px;
    border: 1px solid #ffffff;
  }

  .button-box :hover {
    transform: translate(2px, 2px);
  }
`;
