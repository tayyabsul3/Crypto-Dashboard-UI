import {
  Button,
  HStack,
  Icon,
  Stack,
  Tag,
  Text,
  defineStyleConfig,
} from "@chakra-ui/react";
import { IoIosInformationCircleOutline } from "react-icons/io";
const Portfolio = () => {
  return (
    <HStack
      bg={"white"}
      borderRadius={"xl"}
      justify={"space-between"}
      maxW={"70rem"}
      py={"15px"}
      px={"15px"}
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "flex-start",
        lg: "center",
      }}
    >
      <HStack
        spacing={{
          base: "5",
          lg: "8",
        }}
        flexDirection={{
          base: "column",

          lg: "row",
        }}
        alignItems={{
          base: "flex-start",
          lg: "center",
        }}
      >
        <Stack>
          <HStack>
            <Text fontSize={"14px"}>Total Portfolio Value</Text>
            <Icon as={IoIosInformationCircleOutline} />
          </HStack>
          <Text textStyle={"h2"} fontWeight={"medium"}>
            Rs.112,312.24
          </Text>
        </Stack>
        <Stack>
          <HStack>
            <Text fontSize={"14px"}>Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={{
              base: "4",
              md: "6",
              lg: "6",
            }}
            flexDirection={{
              base: "column",
              md: "row",
              lg: "row",
            }}
            alignItems={{
              base: "flex-start",
              lg: "center",
            }}
          >
            <HStack>
              <Text textStyle={"h1"} fontWeight={"medium"}>
                22.39401000
              </Text>
              <Tag>BTC</Tag>
            </HStack>
            <HStack justify={"end"}>
              <Text textStyle={"h1"} fontWeight={"medium"}>
                Rs1,300.00
              </Text>
              <Tag>Rs</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button>Deposit</Button>
        <Button>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default Portfolio;
