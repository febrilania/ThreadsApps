import { Flex } from "@chakra-ui/react";

import FormPostReplies from "../features/RepliesThreads/components/FormPostReplies";

import DetailThreads from "../features/Threads/component/DetailThreads";
import { rootState } from "../store/types/RootState";
import React from "react";
import { useThreads } from "../features/Threads/hooks/useThreads";
import { useSelector } from "react-redux";
import { useReplies } from "../features/RepliesThreads/hooks/useReplies";
import { ListReplies } from "../features/RepliesThreads/components/ListReplies";
import { IReplies } from "../interface/Replies";

const Replies: React.FC = () => {
  const { getThread } = useThreads();
  const thread = useSelector((state: rootState) => state.thread.data);
  React.useEffect(() => {
    getThread();
  }, []);
  console.log(thread);

  const { getReplies } = useReplies();
  const replies = useSelector((state: rootState) => state.replies.getReplies);
  React.useEffect(() => {
    getReplies();
  }, []);
  console.log(replies);
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
        />

        <FormPostReplies />

        {replies.map((data: IReplies) => {
          return (
            <>
              <ListReplies
                id={data.id}
                content={data.content}
                image={data.image}
                created_At={data.created_At}
                user={data.user}
              />
            </>
          );
        })}
      </Flex>
    </>
  );
};
export default Replies;
