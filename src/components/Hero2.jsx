import { Box, Text, Image, Heading, Flex,useColorModeValue } from "@chakra-ui/react";
import Container from "../components/container";

const Hero2 = () => {
    return (
        <Box mb={["5rem", "6rem", "10rem"]} as="section">
            <Container position="relative">
                <Box position="absolute" bottom="50%" left="-5%">
                    <Image
                        mr="auto"
                        width="1rem"
                        src="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/testimonial_plus.svg"
                    />
                </Box>
                <Flex mb="2.4rem" justify="space-between" align="center">
                    <Heading as="h2" fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>Featured Products</Heading>
                    <Flex cursor="pointer" align="center">
                        <Text fontFamily="Inter" color="brand.orange" mr="5px">View all</Text>
                        <Image src="https://res.cloudinary.com/djksghat4/image/upload/v1606868554/chakra/arrow_right.svg" />
                    </Flex>
                </Flex>
                <Flex flexWrap="wrap" justifyContent="space-between" alignItems="center">
                    <DestinationCard name="Adidas" imageUrl="https://res.cloudinary.com/djksghat4/image/upload/v1606868550/chakra/featured1.png" />
                    <DestinationCard name="Nike" imageUrl="https://res.cloudinary.com/djksghat4/image/upload/v1606868550/chakra/featured2.png" />
                    <DestinationCard name="Campus" imageUrl="https://res.cloudinary.com/djksghat4/image/upload/v1606868550/chakra/featured3.png" />
                    <DestinationCard name="Bata" imageUrl="https://res.cloudinary.com/djksghat4/image/upload/v1606868550/chakra/featured4.png" />
                </Flex>
            </Container>
        </Box>
    );
};

const DestinationCard = ({ name, imageUrl }) => {
    const textColor = useColorModeValue('gray.800', 'gray.700');
    return (
        <Box position="relative" width={{ base: "45%", md: "22%", lg: "22%" }} mb={{ base: "2rem", md: "0", lg: "0" }}>
            <Image
                mx="auto"
                borderRadius="10px"
                src={imageUrl}
            />
            <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                p="1rem"
                backgroundColor="rgba(255, 255, 255, 0.9)"
                borderBottomRadius="10px"
                textAlign="center"
                boxShadow="md"
            >
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md", lg: "lg" }} color={textColor}>{name}</Text>

            </Box>
        </Box>
    );
};

export default Hero2;
