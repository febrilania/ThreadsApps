import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
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
          <Box my={3} display={"flex"}>
            <Avatar
              size={"md"}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Box ml={3}>
              <Text fontSize={"sm"} color={"white"}>
                Puan Maharani
              </Text>
              <Text fontSize={"sm"} color={"gray"}>
                @Maharani
              </Text>
            </Box>

            <Button
              background={"gray"}
              borderRadius={20}
              ms={"65%"}
              position={"absolute"}
            >
              Following
            </Button>
          </Box>
          <Box my={3} display={"flex"}>
            <Avatar
              size={"md"}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Box ml={3}>
              <Text fontSize={"sm"} color={"white"}>
                Ganjar Pranowo
              </Text>
              <Text fontSize={"sm"} color={"gray"}>
                @Bapaknya alam semesta
              </Text>
            </Box>

            <Button
              background={"gray"}
              borderRadius={20}
              ms={"65%"}
              position={"absolute"}
            >
              Follow
            </Button>
          </Box>
          <Box my={3} display={"flex"}>
            <Avatar
              size={"md"}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Box ml={3}>
              <Text fontSize={"sm"} color={"white"}>
                Megawati sukarno putri
              </Text>
              <Text fontSize={"sm"} color={"gray"}>
                @megawat
              </Text>
            </Box>

            <Button
              background={"gray"}
              borderRadius={20}
              ms={"65%"}
              position={"absolute"}
            >
              Follow
            </Button>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

export default Suggest;
