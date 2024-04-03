// import {
//   Grid,
//   GridItem,
//   Avatar,
//   Heading,
//   Button,
//   Box,
//   Text,
// } from "@chakra-ui/react";
// import { IFollower } from "../../../interface/Follows";
// import FollowButton from "./FollowButton";

// export function CardFollows(props: IFollower) {
//   const user = { ...props.data };
//   console.log(props);
//   return (
//     <Box>
//       <Grid
//         p={5}
//         gap={5}
//         alignItems={"center"}
//         templateColumns="repeat(10, 1fr)"
//       >
//         <GridItem colSpan={1}>
//           <Avatar name="Dan Abrahmov" src={user.follower.photo_profile} />
//         </GridItem>
//         <GridItem colSpan={7}>
//           <Heading as="h5" size="sm" color={"white"}>
//             {user.follower.full_name}
//           </Heading>
//           <Text fontSize="sm">@{user.follower.username}</Text>
//           <Text fontSize="xs" color={"white"}>
//             {user.follower.bio}
//           </Text>
//         </GridItem>
//         <GridItem colSpan={2} textAlign={"right"}>
//           {/* <Button
//             borderRadius={20}
//             background={props.is_followed ? "green.400" : "gray.400"}
//           >
//             {props.is_followed ? "Following" : "Follow"}
//           </Button> */}
//           <FollowButton  />
//         </GridItem>
//       </Grid>
//     </Box>
//   );
// }
import { Grid, GridItem, Avatar, Heading, Box, Text } from "@chakra-ui/react";
import { IFollower } from "../../../interface/Follows";
import FollowButton from "./FollowButton";

export function CardFollows(props: IFollower & { userId: number }) {
  const user = { ...props.data };
  console.log(props);
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
            name={user.follower.full_name}
            src={user.follower.photo_profile}
          />
        </GridItem>
        <GridItem colSpan={7}>
          <Heading as="h5" size="sm" color={"white"}>
            {user.follower.full_name}
          </Heading>
          <Text fontSize="sm">@{user.follower.username}</Text>
          <Text fontSize="xs" color={"white"}>
            {user.follower.bio}
          </Text>
        </GridItem>
        <GridItem colSpan={2} textAlign={"right"}>
          <FollowButton userId={props.userId} />
        </GridItem>
      </Grid>
    </Box>
  );
}
