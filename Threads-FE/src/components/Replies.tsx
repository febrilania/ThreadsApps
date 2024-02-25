import { Flex } from "@chakra-ui/react";
import FormPostReplies from "../features/FormPostReplies";
import DetailThreads from "../features/detailThreads";
import ListReplies from "../features/ListReplies";

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
