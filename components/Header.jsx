import Link from "next/link";
import styled from "styled-components";

const A = styled.a`
  margin-right: 1rem;
`;

const Header = () => {
  return (
    <div>
      <Link href="/">
        <A>홈</A>
      </Link>
      <Link href="/board">
        <A>게시판</A>
      </Link>
    </div>
  );
};

export default Header;
