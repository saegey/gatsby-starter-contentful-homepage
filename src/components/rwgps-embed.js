import * as React from "react"

export default function RWGPSEmbed(props) {
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
