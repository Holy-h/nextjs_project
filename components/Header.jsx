import Link from "next/link";
import styled from "styled-components";

const CustomTagA = styled.span`
  margin-right: 1rem;
`;

const Header = () => {
  return (
    <div>
      <Link href="/">
        <CustomTagA>홈</CustomTagA>
      </Link>
      <Link href="/board">
        <CustomTagA>게시판</CustomTagA>
      </Link>
    </div>
  );
};

export default Header;
