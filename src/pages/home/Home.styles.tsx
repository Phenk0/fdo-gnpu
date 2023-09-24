import styled from "styled-components";

export const AboutContainer = styled.section`
  margin: 0 auto 30px;
  background: var(--gradient-secondary);
  padding: 10px 10px 20px;
  border-radius: 1rem;
  box-shadow: -15px 15px 15px -15px black, inset 0 0 14px -7px black;
  div {
    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
    height: 70vh;
    overflow: hidden;
  }
`;
export const AnnouncementsContainer = styled.section`
  & > h2 {
    font-size: 2em;
  }
`;
