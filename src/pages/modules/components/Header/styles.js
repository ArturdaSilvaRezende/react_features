import styled from "styled-components";

export const Header = styled.header`
  padding: 12px 72px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header__account {
      display: flex;
      align-items: center;

      .header__account__greeting {
        font-size: 13px;

        span {
          &:last-child {
            margin-left: 5px;
            color: #0149fd;
          }
        }
      }

      .vertical-line {
        background-color: #bfcde0;
        color: transparent;
        height: 38px;
        margin: 0 20px;
        width: 1px;

        &::after {
          content: " ";
        }
      }

      .header__account__notifications {
        display: flex;

        svg {
          color: #7486a9;
          height: 20px;
          width: 20px;
        }

        .header__account_bell-icon {
          margin-right: 10px;
        }

        .header__account__user {
          display: flex;
          align-items: center;
          cursor: pointer;

          button {
            margin-right: 5px;
          }
        }
      }
    }
  }
`;
