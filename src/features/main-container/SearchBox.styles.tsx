import styled from "styled-components";

export const SearchBoxStyled = styled.input`
  -webkit-appearance: none;
  outline: none;
  padding: 10px;
  width: 80%;
  line-height: 30px;
  margin-bottom: 20px;
  font-size: initial;
  border-image: var(--gradient-secondary) 3;
  @media screen and (min-width: 800px) {
    width: 50%;
  }
`;
