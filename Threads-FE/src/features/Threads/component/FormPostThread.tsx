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
import { useAppSelector } from "../../../store/RootReducer";

const FormPostThread: React.FC = () => {
  const { postThread, handleChange, handleButtonClick, fileInputRef, data } =
    useThreads();
  const user = useAppSelector((state) => state.auth);

  // Mendapatkan inisial pengguna
  const userInitials = user.full_name
    ? user.full_name
        .split(" ")
        .map((namePart) => namePart[0])
        .join("")
    : "";

  return (
    <Box p={5} bgColor="black" borderBottom={"1px"} borderColor={"gray"}>
      <form onSubmit={postThread} encType="multipart/form-data">
        <FormControl>
          <Flex gap={5} alignItems={"center"}>
            <Avatar
              name={user.full_name || userInitials}
              src={user.photo_profile}
            />
            <Input
              type="text"
              name="content"
              placeholder="What's up!!"
              variant="unstyled"
              onChange={handleChange}
              value={data.content}
              isRequired
            />
            <Button
              variant={"ghost"}
              color={"brand.green"}
              onClick={handleButtonClick}
            >
              <BiSolidImageAdd style={{ height: "50px", width: "50px" }} />
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
  );
};
export default FormPostThread;
