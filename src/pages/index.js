import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 style={{'text-align':'center','color':'#ff5252','font-size':'8rem','text-transform':'uppercase','letter-spacing':'-0.05em'}}>Coming soon</h1>
  </Layout>
)

export default IndexPage
