import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AboutStatList from "../components/about-stat-list"
import AboutHero from "../components/about-hero"

export default function About(props) {
  const { contentfulAbout } = props.data

  return (
    <Layout {...contentfulAbout}>
      <AboutHero {...contentfulAbout.hero} />
      <AboutStatList {...contentfulAbout}></AboutStatList>
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulAbout {
      id
      title
      description
      image {
        id
        url
      }
      hero {
        heading
        text
        image {
          gatsbyImageData
        }
      }
      ...StatsContent
    }
  }
`
