import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

import Header from "../components/Menu/Header";

const IndexPage: React.FC<PageProps> = () => (
  <main className="overflow-hidden">
    <Header />
  </main>
);

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>AllBrainy</title>
    <meta
      name="description"
      content="All Brainy | Product Development Lab by Truemark"
    ></meta>
  </>
);
