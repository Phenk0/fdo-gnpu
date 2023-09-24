import styled from "styled-components";

export const AnnouncementWithFloatImageGallery = styled.div`
  &::after {
    content: "";
    display: block;
    clear: both;
  }

  @media screen and (min-width: 991px) {
    padding: 25px;
  }

  & > div {
    max-height: 90vh;
    max-width: 50%;
    height: auto;
    display: inline-block;
    float: left;
    margin-right: 5px;
    @media screen and (min-width: 768px) {
      margin: 0 20px 0 15px;
    }
  }
`;
export const ScalableParagraph = styled.p`
  @media screen and (min-width: 1232px) {
    font-size: 1.5em !important;
  }
`;
