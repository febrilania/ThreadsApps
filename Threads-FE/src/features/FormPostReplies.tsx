import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";

const FormPostReplies: React.FC = () => {
  return (
    <>
      <Box p={5}>
        <FormControl>
          <Flex gap={5} alignItems={"center"}>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Input
              type="text"
              placeholder="Type your reply"
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
            <Button colorScheme="teal" size="md" borderRadius={20} px={10}>
              Post
            </Button>
          </Flex>
        </FormControl>
      </Box>
    </>
  );
};
export default FormPostReplies;
