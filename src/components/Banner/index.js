import { Row } from "antd";

import * as S from "./styles";
import { Link } from "Common";

const Banner = () => {
  const isOldDomain = window.location.origin.includes("dsmorais.com");

  if (!isOldDomain) {
    return "";
  }

  return (
    <S.Header>
      <S.Container>
        <Row
          background="red"
          type="flex"
          justify="center"
          align="center"
          gutter={20}
          wrap={false}
        >
          <Link href="https://davidmorais.com" color="white">
            ⚠️ This website is moving to davidmorais.com 🚀
          </Link>
        </Row>
      </S.Container>
    </S.Header>
  );
};

export default Banner;
