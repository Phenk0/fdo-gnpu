import styled from "styled-components";

export const AnnouncementContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  img {
    width: inherit;
  }
`;
export const Date = styled.span`
  display: block;
  color: gray;
  font-style: italic;
  font-size: 0.8em;
  text-align: end;
  margin: 0.8em;
`;
export const PDFContainer = styled.div`
  background-color: #e4e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
  //height: 600px;
  overflow-y: auto;
  margin-bottom: 10px;

  @media screen and (max-width: 650px) {
    height: 500px;
  }
  span {
    margin-top: 3px;
  }
`;
export const AdditionalInformation = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-top: 1em;
`;
