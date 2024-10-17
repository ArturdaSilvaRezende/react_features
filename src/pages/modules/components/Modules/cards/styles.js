import styled from "styled-components";

export const ModulesCard = styled.div`
  background-color: #fefcfd;
  border-radius: 6px;
  padding: 4px;
  width: 288.5px;

  .card_description-box {
    padding: 20px 10px;

    .card__description {
      border-bottom: 1px solid #e3edf9;
      padding-bottom: 20px;

      h3 {
        color: #000000;
        font-size: 13px;
        font-weight: 600;
        margin-bottom: 20px;
      }

      p {
        color: #546984;
        font-size: 12px;
      }
    }

    .card__modules-contents {
      display: flex;

      .card__modules-contents__item {
        display: flex;
        align-items: center;
        color: #546984;
        margin: 20px 0;

        & + .card__modules-contents__item {
          margin-left: 10px;
        }

        p {
          font-size: 12px;
        }

        &:first-child {
          span {
            background-color: #e3edf9;
          }
        }

        &:last-child {
          span {
            background-color: #f1e3f9;
          }
        }

        span {
          display: block;
          position: relative;
          margin-right: 5px;

          &:first-child {
            border-radius: 50%;
            height: 24px;
            width: 24px;
          }

          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 16px;
            width: 16px;
          }
        }
      }
    }
  }
`;
