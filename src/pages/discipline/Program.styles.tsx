import styled from 'styled-components';

export const AccreditationList = styled.ul`
  margin: 30px auto;
  max-width: 900px;
  background: var(--gradient-secondary);
  padding: 20px 20px 20px;
  border-radius: 3rem 0;
  box-shadow: -15px 15px 15px -15px rgb(0 0 0 / 80%);
  & > li {
    margin-bottom: 5px !important;
    & > h4 {
      padding-left: 20px;
    }

    span {
      font-weight: bold;
    }
    li {
      list-style: circle;
    }
  }
  .discuss.close {
    display: none;
  }
`;

export const ProgramsContainer = styled.section`
  li {
    margin-bottom: 8px !important;
  }
  h4 {
    text-align: start;
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
export const ListItemWithInlineUnorderedList = styled.li`
  p {
    display: inline-block;
    vertical-align: top;
    margin: 1px;
  }
  ul {
    display: inline-block;
    li {
      list-style: none;
      a {
        display: inline-block;
      }
    }
  }
`;
