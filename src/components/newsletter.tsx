import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

const Newsletter: React.FC<PageProps> = () => (
  <div className="p-10 border bg-white text-center rounded">
    <h2 className="text-3xl text-primary-text-color font-medium mb-4">
      Subscribe to our newsletter!
    </h2>
    <p className="text-secondary-text-color mb-10">
      Sign up for our newsletter and stay in the loop on all the latest updates
      and exclusive content.
    </p>
    <input
      className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      placeholder="Your Email Address"
      type="text"
      name="email"
    />
  </div>
);

export default Newsletter;
