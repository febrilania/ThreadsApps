import { Box } from "@chakra-ui/react";
import ListThreads from "../features/Threads/component/ListThreads";
import { useThreads } from "../features/Threads/hooks/useThreads";
import Layout from "../layout/Layout";
import { IThreads } from "../interface/Threads";
import React, { useRef } from "react";
import FormPostThread from "../features/Threads/component/FormPostThread";
import { useAppSelector } from "../store/RootReducer";

const Home: React.FC = () => {
  const { getThreads } = useThreads();
  const threads = useAppSelector((state) => state.threads.getThreads);
  const formPostThreadRef = useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    getThreads();
  }, [threads]);
  return (
    <>
      <Layout>
        <Box>
          <Box
            ref={formPostThreadRef}
            style={{ position: "sticky", top: 0, zIndex: 9999 }}
          >
            <FormPostThread />
          </Box>
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
                  like={data.like}
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
