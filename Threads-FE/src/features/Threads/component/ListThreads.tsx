import {
  Flex,
  Avatar,
  Heading,
  Box,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { GoHeartFill } from "react-icons/go";
import { LiaComment } from "react-icons/lia";
import { IThreads } from "../../../interface/Threads";
import { useNavigate } from "react-router-dom";

export default function ListThreads(props: IThreads) {
  const user = { ...props.user };
  const navigate: any = useNavigate();

  return (
    <>
      <Box borderBottom={"1px solid gray"}>
        <Box p={5}>
          <Flex gap={2} alignItems={"center"}>
            <Avatar name="Dan Abrahmov" src={user.profile_picture} />
            <Box>
              <Heading as="h5" size="sm">
                {user.full_name}
              </Heading>
              <Text fontSize="sm">@{user.username}</Text>
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
              <Button onClick={() => navigate(`/replies/threads/${props.id}`)}>
                <LiaComment />
                <Text fontSize="sm">230 Comment</Text>
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
