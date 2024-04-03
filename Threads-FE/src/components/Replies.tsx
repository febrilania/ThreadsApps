import { Flex } from "@chakra-ui/react";

import FormPostReplies from "../features/RepliesThreads/components/FormPostReplies";

import DetailThreads from "../features/Threads/component/DetailThreads";
import React from "react";
import { useThreads } from "../features/Threads/hooks/useThreads";

import { ListReplies } from "../features/RepliesThreads/components/ListReplies";
import { useAppSelector } from "../store/RootReducer";

const Replies: React.FC = () => {
  const { getThread } = useThreads();
  const thread = useAppSelector((state) => state.thread.data);
  React.useEffect(() => {
    getThread();
  }, [thread]);
  console.log(thread);

  return (
    <>
      <Flex direction={"column"} gap={5}>
        <DetailThreads
          id={thread.id}
          content={thread.content}
          image={thread.image}
          created_at={thread.created_at}
          user={thread.user}
          repliesLength={thread.repliesLength}
          likeLength={thread.likeLength}
          like={thread.like}
        />

        <FormPostReplies />

        <ListReplies />
      </Flex>
    </>
  );
};
export default Replies;
