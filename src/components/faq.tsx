import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

const Faq: React.FC<PageProps> = () => (
  <div>
    <div className="text-center mb-16">
      <p className="text-blue-500 font-medium mb-6">Support</p>
      <h1 className="text-2xl text-primary-text-color font-semibold mb-4">
        Frequently asked questions
      </h1>
      <p className="text-secondary-text-color">
        Have questions? We’re here to help
      </p>
    </div>
    <div className="px-8 md:px-28">
      <div>
        <span className="flex justify-between items-center">
          <h1 className="font-medium text-lg text-primary-text-color mb-3 md:mb-6">
            What is a design theme website?
          </h1>
          <svg
            className="fill-current h-4 w-4 transform accordion-arrow"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 9l4 4 4-4" />
          </svg>
        </span>

        <p className="text-secondary-text-color">
          A design theme website is a platform that offers pre-made templates
          for websites, that can be customized to fit the user's needs and
          preferences.
        </p>
      </div>
    </div>
  </div>
);

export default Faq;
