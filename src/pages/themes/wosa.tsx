import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <body className="bg-gray-100">
    <header className="py-6 bg-white">
      <div className="container mx-auto">
        <h1 className="text-3xl font-medium text-center">Theme Marketplace</h1>
      </div>
    </header>
    <section className="container py-12 mx-auto">
      <h2 className="mb-6 text-2xl font-medium text-center">Explore Our Themes</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-lg">
          <img src="theme1.jpg" alt="Theme 1" className="w-full mb-4" />
          <h3 className="text-lg font-medium">Theme 1</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="p-2 mt-4 text-white bg-indigo-500 rounded-lg">Learn More</a>
        </div>
        <div className="p-6 bg-white rounded-lg">
          <img src="theme2.jpg" alt="Theme 2" className="w-full mb-4" />
          <h3 className="text-lg font-medium">Theme 2</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="p-2 mt-4 text-white bg-indigo-500 rounded-lg">Learn More</a>
        </div>
        <div className="p-6 bg-white rounded-lg">
          <img src="theme3.jpg" alt="Theme 3" className="w-full mb-4" />
          <h3 className="text-lg font-medium">Theme 3</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="p-2 mt-4 text-white bg-indigo-500 rounded-lg">Learn More</a>
        </div>
      </div>
    </section>
    <footer className="py-6 bg-gray-200">
      <div className="container mx-auto">
        <p className="text-center text-gray-600">Copyright ©2022 Theme Marketplace</p>
      </div>
    </footer>
    </body>
  )
}

export default IndexPage

export const Head: HeadFC = () => <>
<title>Home | Polo Themes</title> 
<meta name="description" content="Polothemes sells e-commerce themes (figma, tailwindcss, nextjs), currently nextjs themes only support shopify"></meta>
</>
