import { Stack, Tag, Text } from "@chakra-ui/react";
import CustomCard from "../../components/CustomCard";

const BottomCard = ({ tag, text, imgurl, inverted }) => {
  return (
    <CustomCard bg={
      inverted ? "#5F00D9" : "white"
    } minH={"130px"}>
      <Stack
        backgroundImage={imgurl}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        width={"full"}
      >
        <Tag
          w={"max-content"}
          bg={inverted ? "black.5" : "purple"}
          color={inverted ? "black" : "white"}
          // Corrected the conditional expression
        >
          {tag}
        </Tag>
        <Text pt={"2"}  textStyle={"h6"}  color={!inverted ? "black" : "white"} >
          {text}
        </Text>
      </Stack>
    </CustomCard>
  );
};

export default BottomCard;
