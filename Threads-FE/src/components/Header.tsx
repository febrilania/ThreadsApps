import { Box, Heading } from "@chakra-ui/react";

const Header: React.FC = () => {
  return (
    <>
      <Box background={"black"} display={{ base: "block", xl: "none" }}>
        <Heading textAlign={"center"} fontSize={"6xl"} color={"#04A51E"}>
          circle
        </Heading>
      </Box>
    </>
  );
};
export default Header;
