import { Flex } from "@chakra-ui/react";
import FormPostReplies from "../features/FormPostReplies";
import ListReplies from "../features/ListReplies";
import DetailThreads from "../features/DetailThreads";

const Replies: React.FC = () => {
  return (
    <>
      <Flex direction={"column"} gap={5}>
        <DetailThreads />
        <FormPostReplies />
        <ListReplies />
      </Flex>
    </>
  );
};
export default Replies;
