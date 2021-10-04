import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Layout from "../components/layout"
import Seo from "../components/Seo"
const IndexPage = ({ data }) => {
  console.log(data)
  const {
    allStrapiProject: { nodes: projects },
  } = data

  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} showLink title="featured projects" />
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProject(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        Image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
export default IndexPage
