import Link from "next/link";
import Layout from "../components/Layout";

const BoardLink = props => {
  // as를 이용해 url을 깔끔하게 보이도록 할 수 있음
  return (
    <li>
      <Link
        as={`/board/${props.title}`}
        href={`/boardView?title=${props.title}`}
      >
        <a>{props.title}</a>
      </Link>
    </li>
  );
};

export default () => {
  return (
    <Layout>
      <h2>게시판 리스트</h2>
      <ul>
        <BoardLink title="NextBoard1" />
        <BoardLink title="NextBoard2" />
        <BoardLink title="NextBoard3" />
      </ul>
    </Layout>
  );
};
