import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Layout from "../components/layout"
import Seo from "../components/Seo"
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
    </Layout>
  )
}

export default IndexPage
