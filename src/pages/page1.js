import React from "react"
import Layout from "../components/layout"

const FirstPage = () => (
  <section>
    <Layout
      fBlockTitle="PAGE1"
      fBlockDesc="Next-gen network initiative created on top of WebRTC"
      sBlockImg="barbarian.png"
      sBlockTitle="There is text block with image"
      sBlockDesc={[
        "Morbi lacinia porttitor suscipit. Curabitur ultrices ante orci, vitae condimentum tellus hendrerit vitae. Nullam sollicitudin interdum nunc.",
        "Vestibulum efficitur, dolor id feugiat ultrices, eros lacus pulvinar dui, eget venenatis ex neque vitae mi. Nullam ultrices, tortor quis finibus aliquet, lacus tortor dignissim lorem, a consequat justo ex nec felis. Cras auctor nec quam vel lacinia.",
        "Nam sed metus ornare augue porttitor placerat vel in erat. Etiam in commodo tellus, id varius augue. Quisque neque urna, maximus cursus elementum et, fermentum at felis. Vestibulum molestie, felis eget mollis varius, ipsum sem dictum nunc, congue luctus dolor dui in neque. Fusce feugiat elementum turpis, nec euismod eros hendrerit eu. Phasellus ligula sapien, maximus eu facilisis sit amet, pellentesque ac diam.",
      ]}
      tBlockImg="01.jpg"
      tBlockBgImg="bg.jpg"
      tBlockTitle="Something else"
      tBlockDesc={[
        "There will be the next text block with image on right side and the background one",
      ]}
    />
  </section>
)

export default FirstPage
