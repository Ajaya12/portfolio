import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

const Header: React.FC<PageProps> = () => (
  <header>
    <div className="container mx-auto py-4">
      <div className="flex justify-between">
        <p className="font-semibold">AJ</p>

        <div className="flex gap-5">
          <Link className="block cursor-pointer hover:text-primary-500 md:px-0 md:py-0 md:mr-1 md:inline">
            Home
          </Link>
          <Link className="block cursor-pointer hover:text-primary-500 md:px-0 md:py-0 md:mr-1 md:inline">
            About me
          </Link>
          <Link className="block cursor-pointer hover:text-primary-500 md:px-0 md:py-0 md:mr-1 md:inline">
            Services
          </Link>
          <Link className="block cursor-pointer hover:text-primary-500 md:px-0 md:py-0 md:mr-1 md:inline">
            Projects
          </Link>
          <Link className="block cursor-pointer hover:text-primary-500 md:px-0 md:py-0 md:mr-1 md:inline">
            Contact
          </Link>
        </div>

        <button className="btn btn-primary">Download CV</button>
      </div>
    </div>
  </header>
);

export default Header;
