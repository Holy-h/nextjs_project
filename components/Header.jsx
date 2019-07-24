import Link from "next/link";
import styled from "styled-components";

const NavBtn = styled.a`
  margin-right: 1rem;
`;

const Header = () => {
  return (
    <div>
      <Link href="/">
        <NavBtn>홈</NavBtn>
      </Link>
      <Link href="/board">
        <NavBtn>게시판</NavBtn>
      </Link>
    </div>
  );
};

export default Header;
