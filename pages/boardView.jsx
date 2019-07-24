import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default props => {
  const router = useRouter();
  // console.log(router);
  return (
    <Layout>
      <h2>제목: {router.asPath}</h2>
      <p>상세 내용</p>
    </Layout>
  );
};
