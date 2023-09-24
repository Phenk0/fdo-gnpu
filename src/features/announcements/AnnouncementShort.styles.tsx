import styled from 'styled-components';

export const AnnouncementContainer = styled.div`
  background: var(--gradient-secondary);
  margin-top: 1rem;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 1em;
  box-shadow: -15px 15px 15px -15px rgb(0 0 0 / 80%);
  @media screen and (min-width: 991px) {
    padding: 25px;
  }
  img {
    width: 100%;
    border-radius: 0.5em;
  }
`;
export const PDFContainer = styled.div`
  .react-pdf__Page {
    margin: 0 !important;
  }
`;
export const AdditionalInformation = styled.div`
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;
export const MainInformation = styled.div`
  display: flex;
  height: 250px;
  overflow: hidden;

  img {
    max-height: 90vh;
    max-width: 50%;
    height: auto;
    display: inline-block;
    margin: 10px 10px 0 0;
    object-fit: cover;
    @media screen and (min-width: 991px) {
      max-width: 40%;
    }
  }

  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;
export const WrapAndHide = styled.div`
  -webkit-mask-image: linear-gradient(black 50%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
`;
