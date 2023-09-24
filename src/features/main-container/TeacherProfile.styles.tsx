import styled from 'styled-components';

export const ProfileContainer = styled.div`
  margin: 0 auto 30px;
  max-width: 900px;
  background: var(--gradient-secondary);
  padding: 10px 20px 20px;
  border-radius: 3rem 0;
  box-shadow: -15px 15px 15px -15px rgb(0 0 0 / 80%);
`;
export const GoBackWrapper = styled.div`
  margin: 0 auto 30px;
`;
export const MainInfo = styled.div`
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  img {
    width: 49%;
    border-radius: 10% 0 0 0;
  }
  div {
    width: 49%;
    padding-left: 3%;
    h3 {
      margin: 0.7em 0;
      text-align: start;
      :first-child {
        font-size: 1.3em;
        text-shadow: 0 0 5px white;
      }
    }
  }
`;
export const AdditionalInfo = styled.div`
  h4 {
    text-align: start;
    margin: 15px 0 0.25em;
    font-size: 1.2rem;
  }
  p {
    text-align: justify;
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0 !important;
    li {
      margin-bottom: 0.25em !important;
    }
  }
  address {
    text-align: start;
  }
  .rpv-core__inner-page {
    background: none;
  }
`;
export const ClickableH4 = styled.h4<{ $isClose: boolean }>`
  cursor: pointer;

  & svg {
    transition: transform 0.3s;
    transform: rotate(${({ $isClose }) => ($isClose ? '0' : '-180')}deg);
  }
`;
export const WorksListWrapper = styled.div<{ $isClose: boolean }>`
  height: 80vh;
  overflow: auto;
  display: ${({ $isClose }) => ($isClose ? 'none' : 'block')};
`;

export const CerfInfoWrapper = styled(WorksListWrapper)`
  height: 100%;

  img {
    box-shadow: none;
  }
`;
