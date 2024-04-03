import { Box } from "@chakra-ui/react";
import Suggest from "./Suggest";
import FootRight from "./FootRight";
import MyProfile from "./MyProfile";

export function RightBar() {
  return (
    <Box py={5} position={"sticky"} top={"0"}>
      <MyProfile />
      <Suggest />
      <FootRight />
    </Box>
  );
}
