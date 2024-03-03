import { Box, HStack, Stack, Icon, Text, Heading } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { MdLoop } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const navLink = [
  {
    icon: RxDashboard,
    name: "Dashboard",
    link: "/",
  },
  {
    icon: MdLoop,
    name: "Transaction",
    link: "/transactions",
  },
];

const Sidebar = () => {
  const location = useLocation();

  const isActivelink = (link) => {
    return link === location.pathname;
  };

  return (
    <Stack w="256px" height="100dvh" bg={"white"}>
      <Heading
        fontSize="20px"
        color="#5F00D9"
        margin="0 auto"
        marginTop="50px"
        _hover={{
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        @MUHAMMADTAYYAB
      </Heading>
      {/* Corrected mapping function */}
      <Stack height={"full"} justify={"space-between"}>
        <Box mt="20px">
          {navLink.map((nav) => (
            <Link to={nav.link} key={nav.name}>
              <HStack mb={"2"}
                bg={isActivelink(nav.link) ? "#F2F2F2" : "white"}
                color={isActivelink(nav.link) ? "black" : "gray"}
                fontWeight={isActivelink(nav.link) ? "600" : "400"}
                mx="12px"
                fontSize="18px"
                p="12px 16px"
                borderRadius="10px"
                _hover={{
                  bg: "#F2F2F2",
                  color: "black",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                {/* Rendering icon component */}
                <Icon as={nav.icon} />
                {/* Rendering text with the name property */}
                <Text>{nav.name}</Text>
              </HStack>
            </Link>
          ))}
        </Box>
        <Link to={"/support"}>
          <HStack
            bg={isActivelink("/support") ? "#F2F2F2" : "white"}
            color={isActivelink("/support") ? "black" : "gray"}
            fontWeight={isActivelink("/support") ? "600" : "400"}
            mx="12px"
            fontSize="18px"
            p="12px 16px"
            borderRadius="10px"
            my={"20px"}
            _hover={{
              bg: "#F2F2F2",
              color: "black",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {/* Rendering icon component */}
            <Icon as={BiSupport} />
            {/* Rendering text with the name property */}
            <Text>Support</Text>
          </HStack>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
