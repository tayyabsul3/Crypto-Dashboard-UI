import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  calc,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { RiAccountCircleFill } from "react-icons/ri";
const TopSidebar = ({ title,onOpen }) => {
  return (
    <Flex 
   
    bg={"white"}
      flexGrow={1}
      justifyContent="center"
      h="64px"
      alignItems={"center"}
    >
        <Box 
        display={{
          base: "block",
          lg: "none",
        }} cursor={"pointer"} padding={"10px"}>
        <HiMenu   fontSize={"30px"} onClick={onOpen}/>
        </Box>
     
       
      
      <Flex
        display="flex"
        justify={"space-between"}
        alignItems={"center"}
        width={"75%"}
        
        
      >
        <Box as={"h1"} fontSize={"28px"} fontWeight={"600"} color={"black"}>
          {title}
        </Box>
        <Menu>
          <MenuButton
            bg="white"
            _hover={{
              bg: "white",
            }}
            as={Button}
            rightIcon={<RiAccountCircleFill fontSize={"40px"} color="black"/>}
          ></MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default TopSidebar;
