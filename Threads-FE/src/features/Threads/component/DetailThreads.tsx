import { Avatar, Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { GoHeartFill } from "react-icons/go";
import { LiaComment } from "react-icons/lia";
import { IThreads } from "../../../interface/Threads";

export default function DetailThreads(props: IThreads) {
  return (
    <>
      <Box p={5}>
        <Flex gap={2} alignItems={"center"}>
          <Avatar name="Dan Abrahmov" src={props.user?.profile_picture} />
          <Box>
            <Heading as="h5" size="sm">
              {props.user?.full_name}
            </Heading>
            <Text fontSize="sm">@{props.user?.username}</Text>
          </Box>
        </Flex>
        <Box>
          <Text fontSize="md" my={3}>
            {props.content}
          </Text>
          <Box boxSize="xs" background={"black"}>
            <Image src={props.image} />
          </Box>
        </Box>
        <Flex gap={1} my={1}>
          <Text fontSize="sm">{props.created_at}</Text>
          <Text fontSize="sm">•</Text>
          <Text fontSize="sm">Date Time</Text>
        </Flex>
        <Flex gap={5}>
          <Flex gap={1} alignItems={"center"}>
            <GoHeartFill />
            <Text fontSize="sm">100</Text>
          </Flex>
          <Flex gap={1} alignItems={"center"}>
            <LiaComment />
            <Text fontSize="sm">230 Comment</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
