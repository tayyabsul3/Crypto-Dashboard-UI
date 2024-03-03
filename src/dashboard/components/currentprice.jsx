import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import CustomCard from "../../components/CustomCard";

const Currentprice = () => {
  const timeStamps = ["7:15 PM", "12:55 AM", "6:35 AM", "12:15 PM", "5:55 PM"];

  return (
    <CustomCard>
      <Stack>
        <HStack justify={"space-between"}>
          <Stack>
            <HStack>
              <Text fontSize={"14px"}>Total Portfolio Value</Text>
              <Icon as={IoIosInformationCircleOutline} />
            </HStack>
            <Text textStyle={"h2"} fontWeight={"medium"}>
              Rs.112,312.24
            </Text>
          </Stack>
          <HStack>
            <Button>Buy</Button>
            <Button>Sell</Button>
          </HStack>
        </HStack>

        <Stack mt={"30px"}>
          <Tabs size="sm" variant="soft-rounded" colorScheme="blue">
            <Flex justify={"end"}>
              <TabList bg={"black.5"} borderRadius={"lg"}>
                <Tab borderRadius={"xl"} p={"sm"}>
                  {" "}
                  Tab 1
                </Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 2</Tab>
              </TabList>
            </Flex>
            <TabPanels>
              <TabPanel>
                <Image src="./graph.svg" />
                <Flex width={"full"} justify={"space-between"}>
                  {timeStamps.map((value, i) => (
                    <Text key={i} fontSize={"sm"} color={"black.40"}>
                      {value}
                    </Text>
                  ))}
                </Flex>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Stack>
    </CustomCard>
  );
};

export default Currentprice;
