import styled from 'styled-components';

export const AlumniProfile = styled.div`
  margin: 0 auto 20px;
  max-width: 1000px;
  background: var(--gradient-secondary);
  padding: 5px 10px 10px;
  border-radius: 1.5rem 0;
  box-shadow: -15px 15px 15px -15px rgb(0 0 0 / 80%);
  display: flex;

  @media screen and (min-width: 768px) {
    padding: 10px 20px 20px;
    border-radius: 3rem 0;
  }
`;
export const InfoWrapper = styled.div`
  width: 65%;
  //height: 100%;
  padding-left: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ul,
  p {
    margin: 0;
    padding: 0 !important;
    overflow: hidden;
    a {
    }
  }
  li {
    text-align: start;
    display: inline-block;

    svg {
      vertical-align: bottom;
    }
  }

  hr {
    display: none;
    @media screen and (min-width: 1230px) {
      width: 100%;
      display: block;
    }
  }
`;
export const ImageWrapper = styled.div`
  width: 35%;
  img {
    width: 100%;
    border-radius: 10% 0 0 0;
  }
`;
