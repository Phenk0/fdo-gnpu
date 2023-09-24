import styled from 'styled-components';

export const AnnouncementContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  img {
    width: inherit;
  }
`;
export const AdditionalInformation = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-top: 1em;
`;
export const PDFContainer = styled.div`
  margin-top: 1rem;
  .react-pdf__Page {
    margin: 0 !important;
  }
`;
