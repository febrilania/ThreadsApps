import {
  Grid,
  GridItem,
  Avatar,
  Heading,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { IFollows } from "../../../interface/Follows";

export function CardFollows(props: IFollows) {
  return (
    <Box>
      <Grid
        p={5}
        gap={5}
        alignItems={"center"}
        templateColumns="repeat(10, 1fr)"
      >
        <GridItem colSpan={1}>
          <Avatar name="Dan Abrahmov" src={props.profile_picture} />
        </GridItem>
        <GridItem colSpan={7}>
          <Heading as="h5" size="sm">
            {props.full_name}
          </Heading>
          <Text fontSize="sm">@{props.username}</Text>
          <Text fontSize="xs">{props.bio}</Text>
        </GridItem>
        <GridItem colSpan={2} textAlign={"right"}>
          <Button borderRadius={20} background={"gray.400"}>
            {props.is_followed}
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
}
