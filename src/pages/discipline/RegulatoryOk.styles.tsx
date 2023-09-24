import styled from "styled-components";
export const Table = styled.table`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  display: block;
  border-spacing: 0;
  border: 1px solid;

  th,
  td {
    border: 1px solid;
    padding: 5px 10px;
    border-top-width: 0;
    border-left-width: 0;
  }
  th {
    padding: 5px;
  }
  td {
    text-align: start;
  }
  tr > th:last-child {
    padding: 10px 5px;
  }
`;
