import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import RWGPSEmbed from "../../components/rwgps-embed"
import {
  Container,
  Box,
  Heading,
  Link,
  Space,
  FlexList,
  Section,
} from "../../components/ui"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS, PARAGRAPH } from "@contentful/rich-text-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import RideHero from "../../components/ride-hero"
import RideStats from "../../components/ride-stats"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
  },
}

export default function Page(props) {
  const { contentfulRide } = props.data

  return (
    <Layout {...contentfulRide}>
      <RideHero {...contentfulRide} />
      <Section>
        <Container width="normal">
          <Heading as="h1">{contentfulRide.title}</Heading>
          <Space size={5} />
          <div>{renderRichText(contentfulRide.description, options)}</div>
          <Space size={5} />
          <RideStats {...contentfulRide} />
          <Space size={5} />
          <RWGPSEmbed url={contentfulRide.sourceUrl} />
        </Container>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    contentfulRide(id: { eq: $id }) {
      title
      sourceUrl
      elevationGain
      type
      routeFormat
      tires
      distance
      surfaceBreakdown
      description {
        raw
      }
      photos {
        url
        gatsbyImageData
      }
      featuredPhoto {
        gatsbyImageData
      }
    }
  }
`
