import {
  Button,
  Grid,
  GridItem,
  Heading,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { MdPersonSearch } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { HiHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { TbLogin2 } from "react-icons/tb";
import { Link as LinkR } from "react-router-dom";

const LeftBar: React.FC = () => {
  return (
    <Grid
      templateAreas={`"header" "nav" "footer"`}
      templateRows={"10% 70% 20%"}
      h={"100vh"} // Set tinggi menjadi 100vh
      position={"fixed"}
    >
      <GridItem area={"header"}>
        <Heading fontSize={"6xl"} color={"#04A51E"}>
          circle
        </Heading>
      </GridItem>
      <GridItem area={"nav"}>
        <List>
          <ListItem>
            <Link
              display={"flex"}
              alignItems={"center"}
              gap={3}
              my={7}
              fontSize={25}
            >
              <HiHome />
              <LinkR to={"/"}>
                <Text fontSize={20}> Home</Text>
              </LinkR>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              display={"flex"}
              alignItems={"center"}
              gap={3}
              my={7}
              fontSize={25}
            >
              <MdPersonSearch />
              <LinkR to={"/search"}>
                <Text fontSize={20}> Search</Text>
              </LinkR>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              display={"flex"}
              alignItems={"center"}
              gap={3}
              my={7}
              fontSize={25}
            >
              <GoHeart />
              <LinkR to={"/follow"}>
                <Text fontSize={20}> Follow</Text>
              </LinkR>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              display={"flex"}
              alignItems={"center"}
              gap={3}
              my={7}
              fontSize={25}
            >
              <CgProfile />
              <LinkR to={"/profile"}>
                <Text fontSize={20}> Profile</Text>
              </LinkR>
            </Link>
          </ListItem>
        </List>
        <Button
          colorScheme="green"
          w={"150%"}
          borderRadius={20}
          color={"white"}
        >
          Create Post
        </Button>
      </GridItem>

      <GridItem area={"footer"} display={"flex"} alignItems={"end"} pb={5}>
        <Link
          href="/login"
          display={"flex"}
          alignItems={"center"}
          gap={3}
          fontSize={25}
        >
          <TbLogin2 />
          <LinkR to={"/Login"}>
            <Text fontSize={20}> Login</Text>
          </LinkR>
        </Link>
      </GridItem>
    </Grid>
  );
};

export default LeftBar;
