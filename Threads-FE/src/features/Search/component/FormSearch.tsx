import { FormControl, Input, Box, Flex } from "@chakra-ui/react";
import { MdPersonSearch } from "react-icons/md";

const FormSearch: React.FC = () => {
  return (
    <>
      <Box p={5}>
        <FormControl>
          <Flex
            px={5}
            py={3}
            background={"gray.800"}
            alignItems={"center"}
            borderRadius={20}
            gap={5}
          >
            <MdPersonSearch />
            <Input
              type="text"
              color={"white"}
              placeholder="Search"
              variant={"unstyled"}
            />
          </Flex>
        </FormControl>
      </Box>
    </>
  );
};
export default FormSearch;
