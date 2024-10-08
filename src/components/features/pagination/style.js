import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  .pagination__data {
    display: flex;
    align-items: center;
    color: #536985;

    button {
      border: 1px solid #dce1e7;
      border-radius: 5px;
      /* color: navy; */
      padding: 5px;
      transition: all 0.3s ease-in;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }

      svg {
        /* color: #3b3f71; */
        font-size: 18px;
        position: relative;
        top: 2px;
      }
    }

    .rc-pagination-item,
    .rc-pagination-item-link {
      display: none;
    }

    .rc-pagination-prev {
      margin-left: 20px;
      margin-right: 10px;
    }
  }
`;

export const PaginationSelect = styled.div`
  display: flex;
  align-items: center;

  p {
    color: #536985;
  }

  select {
    border: 1px solid #dce1e7;
    border-radius: 5px;
    color: #195afd;
    cursor: pointer;
    margin: 0 15px;
    padding: 10px 0;
    outline: none;
  }
`;
