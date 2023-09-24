import styled from "styled-components";

export const SocialWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  h4 {
    position: unset;
  }
`;
export const LogoContainer = styled.a`
  height: 100%;
  width: -webkit-fill-available;
  width: -moz-available;
  max-width: 15%;
  padding: 0 !important;
  font-size: 0.8em !important;

  @media screen and (min-width: 768px) {
    font-size: 0.9em !important;
  }
  @media screen and (min-width: 1232px) {
    font-size: 1em !important;
  }
`;
