import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

import LeaveBalance from "../../images/our-product/leave-balance.png";
import PoloThemes from "../../images/our-product/polo-themes.png";
import Invoice from "../../images/our-product/invoice.png";

import TriangleBackground from "../../images/svg/triangle.svg";
import RightArrow from "../../images/svg/right-arrow.svg";

const OurProduct: React.FC<PageProps> = () => (
  <div id="ourproduct">
    <h3 className="mb-20 text-3xl font-bold text-center text-text-color-900">
      Our Products
    </h3>
    <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-20 mb-28">
      <div className="md:w-1/3">
        <h4 className="mb-6 text-xl font-bold text-text-color-900">
          Leave Balance - Slack app for leave management
        </h4>
        <p className="mb-10 text-text-color-600">
          A Slack app for leave management that helps HR teams efficiently
          manage employee leave requests and balances directly within the Slack
          messaging platform.
        </p>
        <button className="btn-primary">
          <a href="https://www.leavebalance.com/" target={"_blank"}>
            <span className="flex gap-2">
              Get started for free <img src={RightArrow} />
            </span>
          </a>
        </button>
      </div>
      <div className="md:w-2/3">
        <img src={LeaveBalance} alt="Leave Balance" />
      </div>
    </div>

    <div className="relative flex flex-col items-center md:flex-row gap-28 md:gap-20 mb-28">
      <div className="md:w-2/3">
        <img src={Invoice} alt="Invoice" />
      </div>
      <div className="md:w-1/3">
        <h4 className="mb-6 text-xl font-bold text-text-color-900">
          Invoice Work - Time Log management
        </h4>
        <p className="mb-10 text-text-color-600">
          An app that aggregates employee time logs and provides invoicing
          capabilities for small businesses, with built-in motivation tools to
          keep employees focused and productive.
        </p>
        <button className="btn-primary">
          <a href="https://www.invoicework.com/" target={"_blank"}>
            <span className="flex gap-2">
              Get started for free <img src={RightArrow} />
            </span>
          </a>
        </button>
      </div>
      <img
        src={TriangleBackground}
        alt="Triangle Background"
        className="absolute -left-14 -z-10 top-0 sm:-left-20 md:-left-32 w-96 sm:w-[30rem] md:w-[26rem] lg:w-[30rem] xl:w-[39rem]"
      />
    </div>

    <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-20 mb-28">
      <div className="md:w-1/3">
        <h4 className="mb-6 text-xl font-bold text-text-color-900">
          Polo themes - Next stop for awesome e-commerce themes
        </h4>
        <p className="mb-10 text-text-color-600">
          Next.js and Tailwind CSS themes for Shopify and Spree that are
          designed to help businesses launch professional-looking online stores
          quickly and easily.
        </p>
        <button className="btn-primary">
          <a href="https://www.polothemes.com/" target={"_blank"}>
            <span className="flex gap-2">
              Get started for free <img src={RightArrow} />
            </span>
          </a>
        </button>
      </div>
      <div className="md:w-2/3">
        <img src={PoloThemes} alt="Polo Themes" />
      </div>
    </div>
  </div>
);

export default OurProduct;
