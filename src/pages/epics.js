import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading } from "../components/ui"
import RoutesList from "../components/routes-list"

export default function Training(props) {
  const { contentfulRoutesPage } = props.data

  return (
    <Layout {...contentfulRoutesPage}>
      <Box paddingY={5}>
        <Container width="narrow">
          <Heading as="h1">{contentfulRoutesPage.title}</Heading>
          <RoutesList routes={contentfulRoutesPage.blocks} />
        </Container>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulRoutesPage(type: { eq: "epics" }) {
      id
      title
      blocks: routes {
        id
        title
        sourceUrl
        photos {
          url
          gatsbyImageData
        }
        elevationGain
        distance
      }
    }
  }
`
