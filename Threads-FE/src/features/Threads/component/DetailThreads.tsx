import { Avatar, Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { LiaComment } from "react-icons/lia";
import { IThreads } from "../../../interface/Threads";
import { format } from "date-fns";
import Like from "../hooks/Like";

export default function DetailThreads(props: IThreads) {
  return (
    <>
      <Box p={5}>
        <Flex gap={2} alignItems={"center"}>
          <Avatar
            name={props.user?.full_name}
            src={props.user?.photo_profile}
          />
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
          {props.image && (
            <Box boxSize="xs" background={"black"}>
              <Image src={props.image} maxH={"300px"} maxWidth={"500px"} />
            </Box>
          )}
        </Box>
        <Flex gap={1} my={1}>
          <Text fontSize="sm">
            {props.created_at
              ? format(new Date(props.created_at), "HH:mm - dd MMMM yyyy")
              : "No date"}
          </Text>
        </Flex>
        <Flex gap={5}>
          <Flex gap={1} alignItems={"center"}>
            <Like postId={props.id} userId={props.user?.id || 0} />
            <Text fontSize="sm">{props.likeLength}</Text>
          </Flex>
          <Flex gap={1} alignItems={"center"}>
            <LiaComment />
            <Text fontSize="sm">{props.repliesLength}</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
