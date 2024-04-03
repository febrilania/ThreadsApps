import {
  Box,
  Image,
  Avatar,
  Center,
  VStack,
  Text,
  HStack,
  Button,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  Input,
} from "@chakra-ui/react";
import { useAppSelector } from "../store/RootReducer";

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useAppSelector((state) => state.auth);
  return (
    <>
      <Box p={5}>
        <Box
          width={"100%"}
          backgroundColor={"gray.800"}
          m={"auto"}
          borderRadius={20}
          p={5}
        >
          <Box h={"300px"}>
            <Image
              src="https://i.pinimg.com/originals/15/0a/3b/150a3b4a1a90c0a372adf8e83709034e.jpg"
              alt="cover"
              h={"100%"}
              w={"100%"}
              borderRadius={20}
            />
          </Box>
          <Center>
            <Avatar
              size={"xl"}
              name={user.full_name}
              src={user.photo_profile}
              mt={-12}
              mr={"65%"}
            />
          </Center>
          <Button onClick={onOpen} ml={"75%"} mt={-30}>
            Update Profile
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent backgroundColor={"gray.800"} color={"white"}>
              <ModalHeader>Update Profile</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl isRequired>
                  <VStack gap={5}>
                    <Input placeholder="Fullame" />
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                    <Input placeholder="Bio" />
                    <Input placeholder="Photo Profile" />
                    <Input placeholder="Cover Photo" />
                  </VStack>
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  color={"white"}
                  backgroundColor={"gray.600"}
                  mr={3}
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button colorScheme="green">Update</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <HStack alignItems={"center"} mb={5}>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              {user.full_name}
            </Text>
            <Text fontSize={"sm"} color={"gray"}>
              @{user.username}
            </Text>
          </HStack>
          <Box>
            <Text textAlign={"justify"}>Bio :</Text>
          </Box>
          <HStack gap={5} mt={5}>
            <Text fontSize={"sm"}>Following</Text>
            <Text fontSize={"sm"}>Follower</Text>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
