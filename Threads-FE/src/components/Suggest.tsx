import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

const Suggest: React.FC = () => {
  return (
    <>
      <Card mt={5} background={"gray.800"}>
        <CardBody>
          <Heading fontSize={"md"} color={"white"}>
            Suggested for you
          </Heading>
          <Box mt={3}>
            <Grid
              gap={5}
              alignItems={"center"}
              templateColumns="repeat(5, 1fr)"
            >
              <GridItem colSpan={1}>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              </GridItem>
              <GridItem colSpan={3}>
                <Heading as="h5" size="sm" color={"white"}>
                  Fullname
                </Heading>
                <Text fontSize="sm" color={"white"}>
                  @username
                </Text>
              </GridItem>
              <GridItem colSpan={1} textAlign={"right"}>
                <Button borderRadius={20} background={"gray.400"}>
                  Follow
                </Button>
              </GridItem>
            </Grid>
          </Box>
          <Box mt={2}>
            <Grid
              gap={5}
              alignItems={"center"}
              templateColumns="repeat(5, 1fr)"
            >
              <GridItem colSpan={1}>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              </GridItem>
              <GridItem colSpan={3}>
                <Heading as="h5" size="sm" color={"white"}>
                  Fullname
                </Heading>
                <Text fontSize="sm" color={"white"}>
                  @username
                </Text>
              </GridItem>
              <GridItem colSpan={1} textAlign={"right"}>
                <Button borderRadius={20} background={"gray.400"}>
                  Following
                </Button>
              </GridItem>
            </Grid>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

export default Suggest;
