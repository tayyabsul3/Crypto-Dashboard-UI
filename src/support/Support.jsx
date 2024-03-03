import { Box, Grid, GridItem } from "@chakra-ui/react"
import Dashboardlayout from "../components/dashboardlayout"
import ContactForm from "./components/contactForm"

const Support = () => {
  return (
    <Dashboardlayout title={"Support"}>
        <Box maxH={"90vh"} overflowY={"scroll"}>
        <ContactForm /> 
        </Box>
       
    </Dashboardlayout>
  )
}

export default Support