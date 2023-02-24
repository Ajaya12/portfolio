import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

import Header from "../components/header";
import HeroSection from "../components/homepage/herosection";
import Card from "../components/others/card";
import Faq from "../components/faq";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";

import cardImage from "../images/home/cardimage.png";
import cart from "../images/home/cart.svg";

import user from "../images/svg/user.svg";

const IndexPage: React.FC<PageProps> = () => (
  <main>
    <div className="container mx-auto relative">
      <HeroSection />
    </div>

    <Footer />
  </main>
);

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Home | Polo Themes</title>
    <meta
      name="description"
      content="Polothemes sells e-commerce themes (figma, tailwindcss, nextjs), currently nextjs themes only support shopify"
    ></meta>
  </>
);
