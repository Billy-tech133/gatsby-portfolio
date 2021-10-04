import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  console.log(projects)
  return (
    <>
      {/* <Seo title="projects"> */}
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={projects} />
        </section>
      </main>
      {/* </Seo> */}
    </>
  )
}
export const query = graphql`
  {
    allStrapiProject {
      totalCount
      nodes {
        featured
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

export default ProjectsPage
