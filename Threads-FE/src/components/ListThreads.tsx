import {
  Avatar,
  Heading,
  Flex,
  Table,
  Tr,
  Td,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { GoHeartFill } from "react-icons/go";
import { LiaComment } from "react-icons/lia";
import { DataDummy } from "../interface/interface";
import React from "react";

export default function ListThreads(props: DataDummy) {
  const [color, setColor] = React.useState<boolean>(true);
  const [isLike, setIsLike] = React.useState<number>(props.likes_count);

  const like = () => {
    setColor(color === false);
    if (!color) {
      setIsLike((prevLike) => prevLike - 1); // Kurangi jika sedang dalam keadaan like
    } else {
      setIsLike((prevLike) => prevLike + 1);
    }
  };

  return (
    <>
      <Box
        my={10}
        display={"-moz-initialFlex"}
        gap={3}
        borderBottom="1px"
        borderColor="gray"
      >
        <Box px={2} display={"flex"} gap={3} pb={8}>
          <Avatar name="Dan Abrahmov" src={props.picture} />
          <Box>
            <Box display={"flex"} gap={2}>
              <Heading fontSize={"1xl"}>{props.fullname}</Heading>
              <Text fontSize={"sm"} color={"gray"}>
                @{props.username}
              </Text>

              <Text fontSize={"sm"} color={"gray"}>
                • {props.posted_at}
              </Text>
            </Box>
            <Flex direction={"column"} gap={"2"}>
              <Text textAlign={"justify"}>{props.content}</Text>
              <Box maxW={"85%"}>
                <img src={props.image} alt="" />
              </Box>
            </Flex>
            <Table variant={"unstyled"}>
              <Tr display={"flex"}>
                <Td
                  width="150px"
                  display={"flex"}
                  gap={3}
                  alignItems={"center"}
                >
                  {color ? (
                    <Button
                      onClick={like}
                      variant={"gost"}
                      display={"flex"}
                      gap={2}
                    >
                      <GoHeartFill /> {isLike}
                    </Button>
                  ) : (
                    <Button
                      onClick={like}
                      variant={"gost"}
                      display={"flex"}
                      gap={2}
                      color={"red"}
                    >
                      <GoHeartFill /> {isLike}
                    </Button>
                  )}
                </Td>
                <Td
                  width="150px"
                  display={"flex"}
                  gap={3}
                  alignItems={"center"}
                >
                  <LiaComment /> {props.replies_count}
                </Td>
              </Tr>
            </Table>
          </Box>
        </Box>
      </Box>
    </>
  );
}
