import styled from 'styled-components';

export const SelectiveOKContainer = styled.section`
  & > p {
    text-align: center !important;
  }
  a {
    display: inline-block;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
`;

export const TableSimple = styled.table`
  max-width: 1000px;
  margin: 0 auto 20px;
  border-spacing: 0;

  th,
  td {
    padding: 5px;
    @media screen and (min-width: 768px) {
      font-size: 1.2em;
      padding: 5px 10px;
    }
  }
  td {
    text-align: start;
  }
`;
export const Table = styled(TableSimple)`
  width: 90%;
  border: 1px solid;
  th,
  td {
    border: 1px solid;
    padding: 5px;
    border-top-width: 0;
    border-left-width: 0;
    a {
      display: block;
    }
    p {
      font-size: unset;
      margin: 0;
    }
  }
  tr > th:last-child {
    padding: 10px 5px;
  }
`;
