import {
  Avatar,
  Box,
  Grid,
  Heading,
  Text,
  Button,
  GridItem,
} from "@chakra-ui/react";

const ResultSearch: React.FC = () => {
  return (
    <>
      <Box>
        <Grid
          p={5}
          gap={5}
          alignItems={"center"}
          templateColumns="repeat(10, 1fr)"
        >
          <GridItem colSpan={1}>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </GridItem>
          <GridItem colSpan={7}>
            <Heading as="h5" size="sm">
              Fullname
            </Heading>
            <Text fontSize="sm">@username</Text>
            <Text fontSize="xs">biography</Text>
          </GridItem>
          <GridItem colSpan={2} textAlign={"right"}>
            <Button borderRadius={20} background={"gray.400"}>
              Follow
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
export default ResultSearch;
