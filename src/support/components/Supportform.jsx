import { Box, Icon, Stack, Text } from "@chakra-ui/react"

const Supportform = ({logo,heading,text}) => {
  return (
    <Stack maxW={"400px"} gap={4} minH={"130px"}>
    <Icon as={logo} boxSize={"6"} color={"p.purple"}/>
    <Box as="h1" textStyle={"h1"} fontWeight={"bold"}>
      {heading}
    </Box>
    <Text>
      {text}
    </Text>
  </Stack>
  )
}

export default Supportform