import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import {
  Container,
  Box,
  Heading,
  FlexList,
  Icon,
  Text,
  Space,
  Link,
  BlockLink,
} from "../components/ui"

function Route(props) {
  return (
    <Box as="li" width="third" padding={4} paddingY={3}>
      {props.photos[0] && (
        <Icon
          alt={props.photos[0].alt}
          image={props.photos[0].gatsbyImageData}
          size="large"
        />
      )}
      <Space size={2} />
      {/* <Heading variant="subheadSmall">{props.title}</Heading> */}
      <BlockLink {...props} to={`/routes/${props.id}`}>
        {props.title}
      </BlockLink>
    </Box>
  )
}

export default function Training(props) {
  const { contentfulTrainingRoutesPage } = props.data

  return (
    <Layout {...contentfulTrainingRoutesPage}>
      <Box paddingY={5}>
        <Container width="narrow">
          <Heading as="h1">{contentfulTrainingRoutesPage.title}</Heading>
          <FlexList gutter={3} variant="start" responsive wrap>
            {contentfulTrainingRoutesPage.blocks.map((route) => (
              // <p key={route.id} {...route}>
              //   {route.title}
              // </p>
              <Route key={route.id} {...route} />
            ))}
          </FlexList>
        </Container>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulTrainingRoutesPage {
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
      }
    }
  }
`

// export default Training
