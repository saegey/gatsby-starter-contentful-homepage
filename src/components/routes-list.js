import * as React from "react"
import { Box, FlexList, Icon, Space, BlockLink, Text } from "../components/ui"

function Route(props) {
  return (
    <Box as="li" width="third" padding={4} paddingY={3}>
      <BlockLink {...props} to={`/routes/${props.id}`}>
        {props.photos[0] && (
          <Icon
            alt={props.photos[0].alt}
            image={props.photos[0].gatsbyImageData}
            size="large"
          />
        )}
        <Space size={2} />
        {/* <Heading variant="subheadSmall">{props.title}</Heading> */}
        <h2>{props.title}</h2>
        <Text>{props.distance} miles</Text>
        <Text>{props.elevationGain} ft gained</Text>
      </BlockLink>
    </Box>
  )
}

export default function RoutesList(props) {
  return (
    <FlexList gutter={3} variant="start" responsive wrap>
      {props.routes.map((route) => (
        // <p key={route.id} {...route}>
        //   {route.title}
        // </p>
        <Route key={route.id} {...route} />
      ))}
    </FlexList>
  )
}
