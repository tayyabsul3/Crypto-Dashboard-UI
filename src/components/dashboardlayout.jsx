import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react"
import Sidebar from "./sidebar"
import TopSidebar from "./topSidebar"

import Sidedrawer from "./sidedrawer"

const Dashboardlayout = ({title,children}) => {
const {isOpen,onClose,onOpen}= useDisclosure();

  return (
    <Flex>
        <Box  display={{
        base: "none",
        lg: "block",
      }}>
 < Sidebar/>
        </Box>
   
    <Sidedrawer isOpen={isOpen} onClose={onClose}  display={{
        base: "none",
        md:"none",
        xl: "block",
      }}></Sidedrawer>
    <Box  flexGrow={1} >
   
    <TopSidebar  title={title} onOpen={onOpen} />
    <Container  maxWidth={"70rem"} mt={"20px"}>{children}</Container>
    </Box>
    </Flex>
  )
}

export default Dashboardlayout