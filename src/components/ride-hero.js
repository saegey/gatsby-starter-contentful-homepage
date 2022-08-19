import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { Container, Section } from "../components/ui"

export default function RideHero(props) {
  const { featuredPhoto } = props

  return (
    <Section>
      <Container width="wide">
        {featuredPhoto && (
          <GatsbyImage
            alt={featuredPhoto.alt}
            image={getImage(featuredPhoto.gatsbyImageData)}
          />
        )}
      </Container>
    </Section>
  )
}
