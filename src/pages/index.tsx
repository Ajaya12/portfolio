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
      <div className="mb-28">
        <div className="mb-16">
          <Header />
        </div>
        <HeroSection />
        <div className="pink-blur"></div>
        <div className="blue-blur"></div>
      </div>

      <div className="mb-20">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-medium text-primary-text-color">Latest</h2>
            <button className="btn-primary-outline">View all</button>
          </div>
          <div className="sm:flex flex-col lg:flex-row gap-6">
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-medium text-primary-text-color">Popular</h2>
            <button className="btn-primary-outline">View all</button>
          </div>
          <div className="sm:flex flex-col lg:flex-row gap-6">
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-medium text-primary-text-color">
              Shopify Themes
            </h2>
            <button className="btn-primary-outline">View all</button>
          </div>
          <div className="sm:flex flex-col lg:flex-row gap-6">
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-medium text-primary-text-color">Open Source</h2>
            <button className="btn-primary-outline">View all</button>
          </div>
          <div className="sm:flex flex-col lg:flex-row gap-6">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>

      <Faq />
      <p className="m-8">
        Themes
        <ol className="list-decimal">
          <li>
            <Link to="/themes/course-whiz">Course Whiz</Link>
          </li>
          <li>
            <Link to="/themes/eye-cart">Eye Cart</Link>
          </li>
          <li>
            <Link to="/themes/medical">Medical</Link>
          </li>
          <li>
            <Link to="/themes/wosa">Wosa</Link>
          </li>
        </ol>
      </p>
    </div>
    {/* <div className="absolute z-10 w-1/4 top-1/4">
      <Newsletter />
    </div> */}

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
