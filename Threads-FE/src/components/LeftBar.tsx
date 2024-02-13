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
import { TbLogout2 } from "react-icons/tb";
const LeftBar: React.FC = () => {
  return (
    <>
      <Grid
        templateAreas={`"header"
      "nav"
      "footer"`}
        templateRows={"10% 70% 20%"}
        h={"100%"}
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
                <Text fontSize={20}>Home</Text>
              </Link>
              <Link
                display={"flex"}
                alignItems={"center"}
                gap={3}
                my={7}
                fontSize={25}
              >
                <MdPersonSearch />
                <Text fontSize={20}>Search</Text>
              </Link>
              <Link
                display={"flex"}
                alignItems={"center"}
                gap={3}
                my={7}
                fontSize={25}
              >
                <GoHeart />
                <Text fontSize={20}>Follow</Text>
              </Link>
              <Link
                display={"flex"}
                alignItems={"center"}
                gap={3}
                my={7}
                fontSize={25}
              >
                <CgProfile />
                <Text fontSize={20}>Profile</Text>
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
          <Link display={"flex"} alignItems={"center"} gap={3} fontSize={25}>
            <TbLogout2 />
            <Text fontSize={20}>Log Out</Text>
          </Link>
        </GridItem>
      </Grid>
    </>
  );
};

export default LeftBar;
