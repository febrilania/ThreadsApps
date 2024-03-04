import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  Input,
} from "@chakra-ui/react";

import { useThreads } from "../hooks/useThreads";
import { BiSolidImageAdd } from "react-icons/bi";

const FormPostThread: React.FC = () => {
  const { postThread, handleChange, handleButtonClick, fileInputRef, data } =
    useThreads();
  return (
    <>
      <Box p={5}>
        <form onSubmit={postThread} encType="multipart/form-data">
          <FormControl isRequired>
            <Flex gap={5} alignItems={"center"}>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Input
                type="text"
                name="content"
                placeholder="What's up!!"
                variant="unstyled"
                onChange={handleChange}
                value={data.content}
              />
              <Button
                variant={"ghost"}
                color={"brand.green"}
                onClick={handleButtonClick}
              >
                <BiSolidImageAdd
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                />
              </Button>
              <Input
                name="image"
                type="file"
                onChange={handleChange}
                style={{ display: "none" }}
                ref={fileInputRef}
              />
              <Button
                type={"submit"}
                colorScheme="green"
                size="md"
                borderRadius={20}
                px={10}
              >
                Post
              </Button>
            </Flex>
          </FormControl>
        </form>
      </Box>
    </>
  );
};
export default FormPostThread;
