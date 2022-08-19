import * as React from "react"
import { graphql } from "gatsby"
import { Container, Section, FlexList, Box, Text } from "./ui"
import * as styles from "./about-stat-list.css"

function AboutStat(props) {
  return (
    <Box width="fitContent" className={styles.statContainer}>
      {props.value && <Text variant="stat">{props.value}</Text>}
      {props.label && <Text variant="statLabel">{props.label}</Text>}
    </Box>
  )
}

export default function AboutStatList(props) {
  // const props = props
  const routeStats = {
    value: "allContentfulRide",
    label: "Number of routes",
  }
  return (
    <Section>
      <Container>
        <FlexList className={styles.statList} variant="center" responsive>
          <AboutStat key={"founded"} label={"Year Founded"} value="2022" />
          <AboutStat
            key={"test"}
            label={"Number of routes"}
            value={props.activeRoute.length}
          />
          <AboutStat
            key={"test"}
            label={"Total Distance"}
            value={props.activeRoute.reduce(
              (sum, item) => sum + item.distance,
              0
            )}
          />
          <AboutStat
            key={"test"}
            label={"Total Elevation"}
            value={props.activeRoute.reduce(
              (sum, item) => sum + item.elevationGain,
              0
            )}
          />
        </FlexList>
        {/* {JSON.stringify(props)} */}
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment StatsContent on ContentfulAbout {
    activeRoute {
      distance
      elevationGain
    }
  }
`
