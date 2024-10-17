import styled from "styled-components";
import BannerBgImage from "../../assets/images/modules/banner-bg.jpg";

export const Banner = styled.figure`
  background: linear-gradient(
      266.46deg,
      rgba(21, 33, 50, 0) -31.9%,
      #152132 55.38%
    ),
    url(${BannerBgImage});
  background-size: cover;
  background-position: center center;
  height: 193px;
  display: flex;
  align-items: center;

  .container {
    padding: 10px 48px;

    .banner__title {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      h1 {
        font-weight: 600;
        font-size: 36px;

        span {
          &:first-child {
            color: #fefcfd;
          }
          &:last-child {
            color: #0149fd;
          }
        }
      }
    }

    .banner__description {
      color: #fefcfd;
      font-size: 14px;
      width: 658px;
    }
  }
`;
