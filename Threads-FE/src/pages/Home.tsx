import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  IconButton,
  Input,
} from "@chakra-ui/react";
import ListThreads from "../features/Threads/component/ListThreads";
import { useThreads } from "../features/Threads/hooks/useThreads";
import Layout from "../layout/Layout";
import { IThreads } from "../interface/Threads";
import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../store/types/RootState";
import { LuImagePlus } from "react-icons/lu";

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
          <Box p={5}>
            <FormControl>
              <Flex gap={5} alignItems={"center"}>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                <Input
                  type="text"
                  placeholder="What's up!!"
                  variant="unstyled"
                />
                <IconButton
                  variant="outline"
                  colorScheme="green"
                  aria-label="Call Sage"
                  fontSize="20px"
                  borderRadius={10}
                  icon={<LuImagePlus />}
                />
                <Button colorScheme="green" size="md" borderRadius={20} px={10}>
                  Post
                </Button>
              </Flex>
            </FormControl>
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
