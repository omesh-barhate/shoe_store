import { Flex } from "@chakra-ui/react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Hero2 from "../components/Hero2"

export default function Landing(props) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1280px" }}
      m="0 auto"
      {...props}
    >
      <Header />
      <Hero
        title="Shoe Store Tutorial"
        subtitle="Specialized shoes for your soft foot"
        image="https://source.unsplash.com/collection/a-pair-of-white-sneakers-LPVfbpCi--8/800x600"
        ctaText="Create your account now"
        ctaLink="/signup"
      />
      <Hero2 />
      <Footer />
    </Flex>
  )
}