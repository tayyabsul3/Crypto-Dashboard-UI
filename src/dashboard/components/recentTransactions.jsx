import React, { Fragment } from "react";
import CustomCard from "../../components/CustomCard";
import { Box, Divider, Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { FaBtc } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
const RecentTransactions = () => {
  const transactions = [
    {
      logo: FaRupeeSign,
      name: "INR Deposit",
      Date: "2022-06-09 7:06 PM",
      amount: "+ ₹81,123.10",
    },
    {
      logo: FaBtc,
      name: "BTC Sell",
      Date: "2022-05-27 12:32 PM",
      amount: "- 12.48513391 BTC",
    },
    {
      logo: FaRupeeSign,
      name: "INR Deposit",
      Date: "2022-06-09 7:06 PM",
      amount: "+ ₹81,123.10",
    },
  ];
  return (
    <CustomCard>
        <Stack height={"full"} gap={"10"}>
                  <Text>RecentTransactions</Text>
      <Stack gap={"7"}>
       
       
       {transactions.map((transaction, index) => (
       
          <HStack key={index} justify={"space-between"} >
            <HStack alignItems={"center"} spacing={"5"}>
              <Flex bg={"black.5"} h={"full"} justify={"center"} p={"3"} borderRadius={"full"}>
              <Icon as={transaction.logo} fontSize={"large"} bg={"black.5"}/>
              </Flex>
              <Stack>
                <Text textStyle={"h4"}>{transaction.name}</Text>
                <Text>{transaction.Date}</Text>
              </Stack>
            </HStack>
            <Text textStyle={"h5"} fontWeight={"bold"}>{transaction.amount}</Text>
          </HStack>
          
        ))}
      
       
      </Stack>
      </Stack>

    </CustomCard>
  );
};

export default RecentTransactions;
