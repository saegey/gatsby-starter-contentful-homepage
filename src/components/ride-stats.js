import * as React from "react"
import {
  Container,
  Box,
  Heading,
  Link,
  Space,
  FlexList,
  Section,
  Text,
} from "../components/ui"
import * as styles from "./ride-stats.css"

function RideStat(props) {
  const { label, value } = props
  return (
    <Box width="fitContent" className={styles.statContainer}>
      <Text variant="stat">{value}</Text>
      <Text variant="statLabel">{label}</Text>
    </Box>
  )
}

export default function RideStats(props) {
  const { distance, elevationGain, routeFormat, tires, surfaceBreakdown } =
    props

  return (
    <Section>
      <Container>
        <FlexList className={styles.statList} variant="center" responsive>
          <RideStat label="Distance" value={`${distance} miles`} />
          <RideStat label="Elevation Gain" value={`${elevationGain} ft`} />
          <RideStat label="Recommended Tire" value={tires} />
          <RideStat label="Surface" value={surfaceBreakdown} />
          <RideStat label="Route Format" value={routeFormat} />
        </FlexList>
      </Container>
    </Section>
  )
}
