import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      Polo Themes
      <h1 className="text-3xl font-bold underline text-blue-500">
        Eye Cart
      </h1>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <>
<title>Home | Polo Themes</title> 
<meta name="description" content="Polothemes sells e-commerce themes (figma, tailwindcss, nextjs), currently nextjs themes only support shopify"></meta>
</>
