import { Avatar, Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { GoHeartFill } from "react-icons/go";
import { LiaComment } from "react-icons/lia";

const DetailThreads: React.FC = () => {
  return (
    <>
      <Box p={5}>
        <Flex gap={2} alignItems={"center"}>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Box>
            <Heading as="h5" size="sm">
              Fullname
            </Heading>
            <Text fontSize="sm">@username</Text>
          </Box>
        </Flex>
        <Box>
          <Text fontSize="md" my={3}>
            This is Content Threads
          </Text>
          <Box boxSize="xs" background={"black"}>
            <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
          </Box>
        </Box>
        <Flex gap={1} my={1}>
          <Text fontSize="sm">Post Time</Text>
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
};
export default DetailThreads;
