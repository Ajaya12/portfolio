import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

import HeroSection from "./homepage/herosection";
import OurProduct from "./homepage/ourproduct";
import CTA from "./homepage/ctasection";
import Footer from "../components/Menu/Footer";

const IndexPage: React.FC<PageProps> = () => (
  <main className="overflow-hidden">
    <div className="container mx-auto relative">
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
      content="Polothemes sells e-commerce themes (figma, tailwindcss, nextjs), currently nextjs themes only support shopify"
    ></meta>
  </>
);
