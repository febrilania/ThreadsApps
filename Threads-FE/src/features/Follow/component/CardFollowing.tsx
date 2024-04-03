import { Grid, GridItem, Avatar, Heading, Box, Text } from "@chakra-ui/react";
import { IFollowing } from "../../../interface/Follows";
import FollowButton from "./FollowButton";

export function CardFollowing(props: IFollowing & { userId: number }) {
  const user = { ...props.data };
  console.log("iniprops", props);
  return (
    <Box>
      <Grid
        p={5}
        gap={5}
        alignItems={"center"}
        templateColumns="repeat(10, 1fr)"
      >
        <GridItem colSpan={1}>
          <Avatar
            name={user.following.full_name}
            src={user.following.photo_profile}
          />
        </GridItem>
        <GridItem colSpan={7}>
          <Heading as="h5" size="sm" color={"white"}>
            {user.following.full_name}
          </Heading>
          <Text fontSize="sm">@{user.following.username}</Text>
          <Text fontSize="xs" color={"white"}>
            {user.following.bio}
          </Text>
        </GridItem>
        <GridItem colSpan={2} textAlign={"right"}>
          <FollowButton userId={props.userId} />
        </GridItem>
      </Grid>
    </Box>
  );
}
