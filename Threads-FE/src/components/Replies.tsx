import { Flex } from "@chakra-ui/react";
import FormPostReplies from "../features/RepliesThreads/detailThreadsReplies/component/FormPostReplies";
import ListReplies from "../features/RepliesThreads/detailThreadsReplies/component/ListReplies";
import DetailThreads from "../features/RepliesThreads/detailThreadsReplies/component/DetailThreads";

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
