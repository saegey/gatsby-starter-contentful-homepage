import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import {
  Container,
  Box,
  Heading,
  Link,
  Space,
  FlexList,
} from "../../components/ui"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS, PARAGRAPH } from "@contentful/rich-text-types"

function RWGPSEmbed(props) {
  const routeId = props.url.split("/")[4]
  const embedUrl = `https://ridewithgps.com/embeds?type=route&id=${routeId}&sampleGraph=true`
  // return embedUrl
  return (
    <iframe
      src={embedUrl}
      style={{
        width: "1px",
        "min-width": "100%",
        height: "700px",
        border: "none",
      }}
      scrolling="no"
    ></iframe>
  )
}

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
      <Box paddingY={5}>
        <Container width="narrow">
          <Heading as="h1">{contentfulRide.title}</Heading>
          <Space size={5} />
          <div>{renderRichText(contentfulRide.description, options)}</div>
          <Space size={5} />
          <FlexList variant="left" responsive>
            <Box width="fitContent">
              <Text variant="stat">{contentfulRide.type}</Text>
              <Text variant="statLabel">Type</Text>
            </Box>
            <Box width="fitContent">
              <Text variant="stat">{contentfulRide.elevationGain} feet</Text>
              <Text variant="statLabel">Elevation Gain</Text>
            </Box>
            <Box width="fitContent">
              <Text variant="stat">{contentfulRide.routeFormat}</Text>
              <Text variant="statLabel">format</Text>
            </Box>
          </FlexList>
          <Space size={5} />
          <RWGPSEmbed url={contentfulRide.sourceUrl} />
        </Container>
      </Box>
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
      distance
      description {
        raw
      }
    }
  }
`
