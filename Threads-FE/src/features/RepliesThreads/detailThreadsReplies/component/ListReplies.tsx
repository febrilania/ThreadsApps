import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { GoHeartFill } from "react-icons/go";
import { LiaComment } from "react-icons/lia";

const ListReplies: React.FC = () => {
  return (
    <>
      <Box p={5} borderY={"1px solid black"}>
        <Flex gap={5}>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Box>
            <Flex gap={1}>
              <Heading size="sm">Fullname</Heading>
              <Text fontSize="sm">@username</Text>
              <Text fontSize="sm">•</Text>
              <Text fontSize="sm">Date Time</Text>
            </Flex>
            <Box>
              <Text fontSize="sm" my={3}>
                This is Replies Content
              </Text>
            </Box>
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
        </Flex>
      </Box>
    </>
  );
};
export default ListReplies;
