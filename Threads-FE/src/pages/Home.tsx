import { Grid, GridItem } from "@chakra-ui/react";

import Main from "../components/Main";
import RightBar from "../components/RightBar";
import LeftBar from "../components/LeftBar";

const Home: React.FC = () => {
  return (
    <>
      <Grid
        templateColumns="repeat(10, 1fr)"
        background={"black"}
        color={"white"}
      >
        <GridItem
          px={5}
          py={2}
          colSpan={2}
          borderRight="1px"
          borderColor="gray"
        >
          <LeftBar />
        </GridItem>
        <GridItem py={2} colSpan={5} borderRight="1px" borderColor="gray">
          <Main />
        </GridItem>
        <GridItem p={2} colSpan={3}>
          <RightBar />
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
