import { Grid, GridItem } from "@chakra-ui/react";

import Main from "../components/Main";
import RightBar from "../components/RightBar";
import LeftBar from "../components/LeftBar";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Grid
        templateColumns="repeat(10, 1fr)"
        background={"black"}
        color={"white"}
      >
        <GridItem
          display={{ base: "none", xl: "block" }}
          px={5}
          py={2}
          colSpan={2}
          borderRight="1px"
          borderColor="gray"
        >
          <LeftBar />
        </GridItem>
        <GridItem
          py={2}
          px={{ base: 2 }}
          colSpan={{ base: 10, xl: 5 }}
          borderRight="1px"
          borderColor="gray"
        >
          <Main />
        </GridItem>
        <GridItem p={2} colSpan={3} display={{ base: "none", xl: "block" }}>
          <RightBar />
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
