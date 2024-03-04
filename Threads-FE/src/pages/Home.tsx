import { Box } from "@chakra-ui/react";
import ListThreads from "../features/Threads/component/ListThreads";
import { useThreads } from "../features/Threads/hooks/useThreads";
import Layout from "../layout/Layout";
import { IThreads } from "../interface/Threads";
import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../store/types/RootState";
import FormPostThread from "../features/Threads/component/FormPostThread";

const Home: React.FC = () => {
  const { getThreads } = useThreads();
  const threads = useSelector((state: rootState) => state.threads.getThreads);
  React.useEffect(() => {
    getThreads();
  }, []);
  return (
    <>
      <Layout>
        <Box>
          <FormPostThread />
          {threads?.map((data: IThreads) => {
            return (
              <>
                <ListThreads
                  id={data.id}
                  content={data.content}
                  image={data.image}
                  created_at={data.created_at}
                  user={data.user}
                  repliesLength={data.repliesLength}
                  likeLength={data.likeLength}
                />
              </>
            );
          })}
        </Box>
      </Layout>
    </>
  );
};

export default Home;
