import { Avatar, Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

import { useEffect } from "react";
import { IReplies } from "../../../interface/Replies";
import { useReplies } from "../hooks/useReplies";

export function ListReplies() {
  const { replies, getReplies } = useReplies();

  useEffect(() => {
    getReplies();
  }, [replies]);

  return (
    <>
      {replies.map((reply: IReplies, index: number) => (
        <Box key={index} p={5} borderY={"1px solid black"}>
          <Flex gap={5}>
            <Avatar
              name={reply.user.full_name}
              src={reply.user.photo_profile}
            />
            <Box>
              <Flex gap={1}>
                <Heading size="sm">{reply.user.full_name}</Heading>
                <Text fontSize="sm">@{reply.user.username}</Text>
                <Text fontSize="sm">•</Text>
                <Text fontSize="sm">{reply.created_At}</Text>
              </Flex>
              <Box>
                <Text fontSize="sm" my={3}>
                  {reply.content}
                </Text>
                {reply.image && (
                  <Box boxSize="xs" background={"black"}>
                    <Image
                      src={reply.image}
                      maxH={"300px"}
                      maxWidth={"500px"}
                    />
                  </Box>
                )}
              </Box>
              {/* <Flex gap={5}>
                <Flex gap={1} alignItems={"center"}>
                  <GoHeartFill />
                  <Text fontSize="sm">100</Text>
                </Flex>
              </Flex> */}
            </Box>
          </Flex>
        </Box>
      ))}
    </>
  );
}
