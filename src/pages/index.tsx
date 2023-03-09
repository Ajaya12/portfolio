import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

import HeroSection from "./homepage/herosection";
import OurProduct from "./homepage/ourproduct";
import CTA from "./homepage/ctasection";
import Footer from "../components/Menu/Footer";

const IndexPage: React.FC<PageProps> = () => (
  <main className="overflow-hidden">
    <div className="container relative mx-auto">
      <HeroSection />
      <OurProduct />
      <CTA />
    </div>

    <Footer />
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
