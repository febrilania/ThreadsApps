import {
  Avatar,
  Box,
  Button,
  Heading,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";
import React, { useEffect } from "react";
import { DataDummy } from "../interface/interface";
import ListThreads from "./ListThreads";
import { api } from "../libs/api";

const Main: React.FC = () => {
  const [threads, setThreads] = React.useState<DataDummy[]>([]);
  async function getThreads() {
    try {
      const response = await api.get("/threads");
      setThreads(response.data);
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    getThreads();
  }, []);
  console.log(threads);
  // console.log(datajson);

  return (
    <>
      <Box px={3}>
        <Box my={7}>
          <Heading fontSize={"2xl"}>Home</Heading>
        </Box>
        <Box display={"flex"} gap={3}>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Input variant="unstyled" placeholder="What is Happening?!" />
          <IconButton
            variant="outline"
            colorScheme="green"
            aria-label="Call Sage"
            fontSize="20px"
            borderRadius={10}
            icon={<LuImagePlus />}
          />
          <Button colorScheme="green" px={7} borderRadius={20}>
            Post
          </Button>
        </Box>
      </Box>
      {threads.map((data: DataDummy, index: number) => (
        <ListThreads
          id={data.id}
          picture={data.picture}
          username={data.user?.username}
          fullname={data.user?.full_name}
          content={data.content}
          likes_count={data.likes_count}
          replies_count={data.replies_count}
          image={data.image}
          posted_at={data.posted_at}
          key={index}
        />
      ))}
    </>
  );
};
export default Main;
