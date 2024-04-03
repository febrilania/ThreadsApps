import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../store/RootReducer";
import { getUsers } from "../store/async/users";
import { Iuser } from "../interface/Auth";
import FollowButton from "../features/Follow/component/FollowButton";

const Suggest: React.FC = () => {
  const users = useAppSelector((state) => state.users.initialUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Card mt={5} background={"gray.800"}>
      <CardBody>
        <Heading fontSize={"md"} color={"white"}>
          Suggested for you
        </Heading>
        <Box mt={3}>
          {users.map((user: Iuser) => (
            <Box key={user.id} mt={2}>
              <Grid
                gap={5}
                alignItems={"center"}
                templateColumns="repeat(5, 1fr)"
              >
                <GridItem colSpan={1}>
                  <Avatar name={user.full_name} src={user.photo_profile} />
                </GridItem>
                <GridItem colSpan={3}>
                  <Heading as="h5" size="sm" color={"white"}>
                    {user.full_name}
                  </Heading>
                  <Text fontSize="sm" color={"white"}>
                    @{user.username}
                  </Text>
                </GridItem>
                <GridItem colSpan={1} textAlign={"right"}>
                  {/* Ganti tombol follow dengan FollowButton */}
                  <FollowButton userId={user.id} />
                </GridItem>
              </Grid>
            </Box>
          ))}
        </Box>
      </CardBody>
    </Card>
  );
};

export default Suggest;
