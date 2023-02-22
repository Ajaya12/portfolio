import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

const Header: React.FC<PageProps> = () => (
  <div className="flex py-4 justify-between items-center">
    <div className="flex items-center gap-20">
      <h1 className="text-lg md:text-2xl font-semibold text-black">
        Polo <span className="text-blue-500">Themes</span>
      </h1>
      <div className="hidden md:flex gap-10">
        <p className="text-black">Home</p>
        <p className="text-black">Our Features</p>
      </div>
    </div>
    <div className="flex gap-4 grid-cols-2">
      <button className="btn-primary-outline">Sign in</button>

      <button className="btn-primary">Sign up</button>
    </div>
  </div>
);

export default Header;
