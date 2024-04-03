import { Avatar, Box, Grid, Heading, Text, GridItem } from "@chakra-ui/react";
import { Iuser } from "../../../interface/Auth";
import FollowButton from "../../Follow/component/FollowButton";

const ResultSearch: React.FC<Iuser> = (props) => {
  return (
    <>
      <Box>
        <Grid
          p={5}
          gap={5}
          alignItems={"center"}
          templateColumns="repeat(10, 1fr)"
        >
          <GridItem colSpan={1}>
            <Avatar name="Dan Abrahmov" src={props.photo_profile} />
          </GridItem>
          <GridItem colSpan={7}>
            <Heading as="h5" size="sm">
              {props.full_name} Fullname
            </Heading>
            <Text fontSize="sm">@ {props.username}</Text>
            <Text fontSize="xs">{props.bio}</Text>
          </GridItem>
          <GridItem colSpan={2} textAlign={"right"}>
            {/* <Button borderRadius={20} background={"gray.400"}>
              Follow
            </Button> */}
            <FollowButton userId={props.id} />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
export default ResultSearch;
