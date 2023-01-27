import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold underline text-blue-500">
        Polo Themes
      </h1>
      <p className="m-8">
        Themes
        <ol className="list-decimal">
          <li><Link to='/themes/course-whiz'>Course Whiz</Link></li>
          <li><Link to='/themes/eye-cart'>Eye Cart</Link></li>
          <li><Link to='/themes/medical'>Medical</Link></li>
          <li><Link to='/themes/wosa'>Wosa</Link></li>
        </ol>
      </p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <>
  <title>Home | Polo Themes</title>
  <meta name="description" content="Polothemes sells e-commerce themes (figma, tailwindcss, nextjs), currently nextjs themes only support shopify"></meta>
</>
