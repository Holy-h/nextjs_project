import Layout from "../components/Layout";
import Link from "next/link";
import React from "react";
import axios from "axios";

const Index = props => {
  const dataList = props.data.map(({ show }) => (
    <li key={show.id}>
      <Link as={`/p/${show.id}`} href={`/post?title=${show.title}`}>
        <a>{show.name}</a>
      </Link>
    </li>
  ));
  return (
    <Layout>
      <div>
        <p>Hello, Next JS</p>
        <h2>홈페이지</h2>
        <h3>영화 목록</h3>
        <ul>{dataList}</ul>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const res = await axios.get("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.data;

  if (!data || data.length === 0) {
    throw new Error(`데이터를 불러오는 데 실패했습니다.`);
  } else {
    console.log(`데이터를 불러오는 데 성공했습니다. Count: ${data.length}`);
  }

  return {
    data
  };
};

export default Index;
