import styled from "styled-components";

export const Title = styled.div`
  img {
    display: block;
    margin: ${({ $margin_align }) => $margin_align || "0 auto 0 0"};
  }

  .title__container {
    margin: 10px 0 30px 0;
    text-align: ${({ $text_align }) => $text_align || "left"};

    h1 {
      color: #010647;
      font-size: 24px;
      margin-bottom: ${({ $margin_bottom }) => $margin_bottom || "24px"};
    }

    p {
      color: #7f7f7f;
      font-size: 13px;
      margin-top: 5px;
    }
  }
`;
