import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Suggest from "./Suggest";
import FootRight from "./FootRight";

const RightBar: React.FC = () => {
  return (
    <>
      <Box py={5}>
        <Card background={"gray.800"}>
          <CardHeader>
            <Heading fontSize={"1xl"} color={"white"} mb={5}>
              My Profile
            </Heading>
            <Image
              h={"80px"}
              w={"100%"}
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              borderRadius={10}
            />
            <Avatar
              ms={8}
              bottom={6}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              border={"1px"}
              borderColor={"black"}
              position={"relative"}
            />
            <Button
              left={"35%"}
              top={2}
              borderRadius={20}
              background={"gray.400"}
            >
              Update Profile
            </Button>
            <Box>
              <Text fontSize={"2xl"} color={"white"}>
                Megalodon
              </Text>
              <Text fontSize={"sm"} color={"gray"}>
                @megawati anake sukarno
              </Text>
              <Text fontSize={"sm"} color={"white"}>
                jangan kelalen coblos nomor telu, banteng nih bos
              </Text>
              <Box display={"Flex"} gap={5} my={"5px"}>
                <Text fontSize={"sm"} color={"white"}>
                  120 <span style={{ color: "gray" }}>following</span>
                </Text>
                <Text fontSize={"sm"} color={"white"}>
                  120 <span style={{ color: "gray" }}>followers</span>
                </Text>
              </Box>
            </Box>
          </CardHeader>
        </Card>
        <Suggest />
        <FootRight />
      </Box>
    </>
  );
};

export default RightBar;
