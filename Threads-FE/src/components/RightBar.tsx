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
import { useUser } from "../features/Auth/hooks/useUser";
import { useSelector } from "react-redux";
import { rootState } from "../store/types/RootState";
import React from "react";

export function RightBar() {
  // const { getUserLogin } = useUser();
  const user = useSelector((state: rootState) => state.auth);
  // React.useEffect(() => {
  //   getUserLogin();
  // }, []);
  // console.log(user);

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
              src={user.profile_picture}
              alt="Dan Abramov"
              borderRadius={10}
            />
            <Avatar
              ms={8}
              bottom={6}
              name="Dan Abrahmov"
              src={user.profile_picture}
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
                {user.full_name}
              </Text>
              <Text fontSize={"sm"} color={"gray"}>
                @{user.username}
              </Text>
              <Text fontSize={"sm"} color={"white"}>
                {user.bio}
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
}
