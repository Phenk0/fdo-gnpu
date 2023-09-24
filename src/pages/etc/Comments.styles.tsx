import styled from 'styled-components';

export const CommentVideo = styled.div`
  background: var(--gradient-secondary);
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 20px 0;
  box-shadow: -15px 15px 15px -15px rgb(0 0 0 / 80%);
  &::after {
    content: '';
    display: block;
    clear: both;
  }

  @media screen and (min-width: 991px) {
    padding: 25px;
  }
  p {
    text-align: center;
  }
`;
export const CommentWithFloatImageGallery = styled.div`
  background: var(--gradient-secondary);
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 20px 0;
  box-shadow: -15px 15px 15px -15px rgb(0 0 0 / 80%);
  &::after {
    content: '';
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
  & > p:last-child {
    text-align: end;
    font-style: italic;
    font-weight: bold;
  }
`;
