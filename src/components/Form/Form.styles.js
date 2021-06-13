import styled from "styled-components";

const color = {
  main: '#fff',
}

export  const FormStyle = styled.form`
  background: rgba(0, 0, 0, 0.8);
`;

export const FormInput = styled.input`
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  color: ${color.main};
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.01);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);

  &::placeholder {
    color: ${color.main};
    opacity: 0.7;
    font-style: italic;
    letter-spacing: 0.1em;
  }
`;
