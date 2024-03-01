import { Grid, GridItem } from "@chakra-ui/react";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar";
import { RightBar } from "../components/RightBar";
import { useUser } from "../features/Auth/hooks/useUser";
import { useSelector } from "react-redux";
import { rootState } from "../store/types/RootState";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
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
          colSpan={{ base: 10, xl: 5 }}
          borderRight="1px"
          borderColor="gray"
        >
          {children}
        </GridItem>
        <GridItem p={2} colSpan={3} display={{ base: "none", xl: "block" }}>
          <RightBar />
        </GridItem>
      </Grid>
    </>
  );
};
export default Layout;
