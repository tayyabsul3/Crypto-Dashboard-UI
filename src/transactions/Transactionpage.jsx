import { Button, Card, CardBody, Flex, Stack, Tag, Text } from "@chakra-ui/react";
import Dashboardlayout from "../components/dashboardlayout";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Table from "./components/Transactiondata";
import Tablejsx from "./components/Transactiondata";
import Transactiondata from "./components/Transactiondata";

const Transactionpage = () => {
const tabs = [
    {
        name:"All",
        count:349
    },
    {
        name:"Deposit",
        count:114
    },
    {
        name:"Withdraw",
        count:213
    },
    {
        name:"Trade",
        count:22
    },
]




  return (
    <Dashboardlayout title={"Transactions"}>
      <Flex justifyContent={"end"} mb={"4"}>
        <Button>Export CSV</Button>
      </Flex>
      <Stack>
        <Card>
        <CardBody>
          <Tabs>
            <TabList mt={"2"}>
             {tabs.map((tabs)=>(
                <Tab >
                    <Flex gap={"4"} mb={"2"}>
                    <Text>{tabs.name}</Text>
                    <Tag colorScheme="gray">{tabs.count}</Tag>
                    </Flex>
                </Tab>
             ))}
            </TabList>

            <TabPanels>
              <TabPanel>
              <Transactiondata/>
              </TabPanel>
              <TabPanel>
              <Transactiondata/>
              </TabPanel>
              <TabPanel>
              <Transactiondata/>
              </TabPanel>
              <TabPanel>
              <Transactiondata/>
              </TabPanel>
            </TabPanels>
          </Tabs>
          </CardBody>
        </Card>
      </Stack>
    </Dashboardlayout>
  );
};

export default Transactionpage;
