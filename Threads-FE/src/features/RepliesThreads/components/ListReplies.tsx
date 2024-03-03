import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { GoHeartFill } from "react-icons/go";
import { LiaComment } from "react-icons/lia";
import { IReplies } from "../../../interface/Replies";

export function ListReplies(props: IReplies) {
  const user = { ...props.user };

  return (
    <>
      <Box p={5} borderY={"1px solid black"}>
        <Flex gap={5}>
          <Avatar name="Dan Abrahmov" src={user.profile_picture} />
          <Box>
            <Flex gap={1}>
              <Heading size="sm">{user.full_name}</Heading>
              <Text fontSize="sm">@{user.username}</Text>
              <Text fontSize="sm">•</Text>
              <Text fontSize="sm">{props.created_At}</Text>
            </Flex>
            <Box>
              <Text fontSize="sm" my={3}>
                {props.content}
              </Text>
            </Box>
            <Flex gap={5}>
              <Flex gap={1} alignItems={"center"}>
                <GoHeartFill />
                <Text fontSize="sm">100</Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
