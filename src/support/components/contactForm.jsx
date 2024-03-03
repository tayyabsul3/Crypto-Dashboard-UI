import {
  Box,
  Button,
  Card,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
import Supportform from "./Supportform";
import { BiSolidMessageRounded } from "react-icons/bi";
import BottomCard from "../../dashboard/components/bottomCard";
const ContactForm = () => {
  return (
    <Stack gap={"12"}  overflowX={"hidden"} overflowY={"scroll"} mb={"20px"}>
      <Flex gap={"6"} flexDirection={{
        base:"column",
        xl:"row"
      }}>
        <Supportform
          logo={FaEnvelope}
          heading={"Contact Us"}
          text={
            "Have a question or just want to know more? Feel free to reach out to us."
          }
        />
        <Card flexGrow={1} p={"6"}>
          <Text mb={"2"} fontWeight={"bold"}>
            You will receive response within 24 hours of time of submit.
          </Text>
          <Stack gap={"6"}>
            <HStack flexDirection={{
                base:"column",
                lg:"row"
            }}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Enter you Name" />
              </FormControl>
              <FormControl>
                <FormLabel>Surname</FormLabel>
                <Input placeholder="Enter you Surname" />
              </FormControl>
            </HStack>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter you Email" />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Enter you Message" />
            </FormControl>
            <Checkbox>
              I agree with
              <Box as={"span"} color={"p.purple"}>
                {" "}
                terms and conditions
              </Box>
            </Checkbox>
            <Stack>
              <Button
                colorScheme="black.5"
                bg={"black.5"}
                _hover={{
                  bg: "black.20",
                }}
                color={"black"}
              >
                Send a Message
              </Button>
              <Button>Book a Meeting</Button>
            </Stack>
          </Stack>
        </Card>
      </Flex>
      <Flex width={"full"} gap={"6"} flexDirection={{
        base:"column",
        xl:"row"
      }}>
        <Supportform
          logo={BiSolidMessageRounded}
          heading={"Live Chat"}
          text={"Don’t have time to wait for the answer? Chat with us now."}
        />
        <Box flexGrow={1} >
          <BottomCard
            
            text="Chat with Us now"
            tag="Chatbot"
            imgurl="./grid_bg.svg"
            inverted={true}
          />
        </Box>
      </Flex>
    </Stack>
  );
};

export default ContactForm;
