import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useAppSelector } from "../store/RootReducer";

function getRandomBackground() {
  const backgrounds = [
    "https://via.placeholder.com/800x200?text=Placeholder+Background+1",
    "https://via.placeholder.com/800x200?text=Placeholder+Background+2",
    "https://via.placeholder.com/800x200?text=Placeholder+Background+3",
    // Tambahkan URL gambar latar belakang tambahan di sini
  ];
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  return backgrounds[randomIndex];
}

const MyProfile = () => {
  const user = useAppSelector((state) => state.auth);
  return (
    <Card background={"gray.800"}>
      <CardHeader>
        <Heading fontSize={"1xl"} color={"white"} mb={5}>
          My Profile
        </Heading>
        <Image
          h={"80px"}
          w={"100%"}
          src={user.cover_photo || getRandomBackground()}
          alt="Cover Photo"
          borderRadius={10}
        />
        <Box ms={7} bottom={8} position={"relative"} display={"inline-block"}>
          <Avatar name={user.full_name} src={user.photo_profile} />
        </Box>
        <Button left={"35%"} top={2} borderRadius={20} background={"gray.400"}>
          Update Profile
        </Button>
        <Box>
          <Text fontSize={"2xl"} color={"white"}>
            {user.full_name || ""}
          </Text>
          <Text fontSize={"sm"} color={"gray"}>
            @{user.username || ""}
          </Text>
          <Text fontSize={"sm"} color={"white"}>
            {user.bio || ""}
          </Text>
          <Box display={"flex"} gap={5} my={"5px"}>
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
  );
};

export default MyProfile;
