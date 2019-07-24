import Layout from "../components/Layout";
import Link from "next/link";
import React from "react";
import axios from "axios";

const Index = props => {
  return (
    <Layout>
      <div>
        <p>Hello, Next JS</p>
        <h2>홈페이지</h2>
      </div>
    </Layout>
  );
};

export default Index;
