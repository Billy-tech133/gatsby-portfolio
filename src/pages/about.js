import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"

const About = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {
  console.log(nodes)
  const { title, stack, info, Image } = nodes[0]
  return (
    <section className="about-page">
      <div className="section-center about-center">
        <img src={Image.publicURL} alt={title} className="about-img-svg" />
        <article className="about-text">
          <Title title={title} />
          <p>{info}</p>
          <div className="about-stack">
            {stack.map(item => {
              return <span key={item.id}>{item.title}</span>
            })}
          </div>
        </article>
      </div>
    </section>
  )
}
export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        info
        Image {
          publicURL
        }
        title
      }
    }
  }
`
export default About
