import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

import HeroSection from "../components/homepage/herosection";
import OurProduct from "../components/homepage/ourproduct";
import CTA from "../components/homepage/cta";

import Footer from "../components/footer";

const IndexPage: React.FC<PageProps> = () => (
  <main>
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
