import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Stack,
  Tag,
} from "@chakra-ui/react";

const Transactiondata = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+₹81,123",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-₹55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: "-5.05555544",
      status: "completed",
    },
  ];

  const statusColor = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626",
  };

  return (
    <TableContainer variant="simple" colorScheme="gray">
      <Table variant="simple">
        <Thead >
          <Tr>
            <Th color={"gray"} fontSize={"smaller"}>ID</Th>
            <Th color={"gray"} fontSize={"smaller"}>Date and Time</Th>
            <Th color={"gray"} fontSize={"smaller"}>Type</Th>
            <Th color={"gray"} fontSize={"smaller"}>Amount</Th>
            <Th color={"gray"} fontSize={"smaller"}>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((tableData) => (
            <Tr >
              <Td fontSize={"large"} fontWeight={"medium"} >{tableData.id}</Td>
              <Td><Stack spacing={0} pt={"1"}>
                <Text fontSize={"large"} fontWeight={"medium"}>{tableData.date}</Text>
                <Text fontSize={"sm"} >{tableData.time}</Text>
                </Stack></Td>
                <Td><Stack spacing={0}>
                <Text fontSize={"large"} fontWeight={"medium"}>{tableData.type.name}</Text>
                <Text fontSize={"sm"}>{tableData.type?.tag}</Text>
                </Stack></Td>
              <Td fontSize={"large"} fontWeight={"medium"}>{tableData.amount}</Td>
              <Td><Tag borderRadius={"full"}  
                  bg={statusColor[tableData.status]}
                  color="white">
              {tableData.status}
                </Tag></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Transactiondata;
