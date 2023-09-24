import styled from "styled-components";

export const EmptyPageElement = styled.div`
  text-align: center;
  min-height: 100%;

  a {
    display: block;
    position: relative;
    margin-top: 10px;
    padding: 0;
    font-size: 3em !important;
    img {
      width: 100%;
      max-width: 100%;
    }
    h1 {
      position: absolute;
      margin: 0;
      left: 50%;
      top: 50%;
      translate: -50% -50%;
    }
  }
`;
