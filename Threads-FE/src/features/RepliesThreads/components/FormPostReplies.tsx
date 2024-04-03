import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";
import { api } from "../../../libs/api";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../store/RootReducer";

const FormPostReplies: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [reply, setReplies] = useState<any[]>([]); // State untuk menyimpan daftar replies
  const { id } = useParams<{ id?: string }>(); // Ubah id menjadi string opsional
  const user = useAppSelector((state) => state.auth);

  const handlePostReplies = async () => {
    try {
      if (!id) {
        console.error("ID is undefined");
        return;
      }

      const formData = new FormData();
      formData.append("content", content);
      if (image) {
        formData.append("image", image);
      }

      const response = await api.post(`/replies/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Tambahkan reply baru ke daftar replies
      setReplies([...reply, response.data]);
      // Reset input setelah berhasil posting reply
      setContent("");
      setImage(null);

      alert("Reply posted successfully!");
    } catch (error) {
      console.error("Error posting replies:", error);
    }
  };

  return (
    <Box p={5}>
      <FormControl>
        <Flex gap={5} alignItems={"center"}>
          <Avatar name={user.full_name} src={user.photo_profile} />
          <Input
            type="text"
            placeholder="Type your reply"
            variant="unstyled"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <input
            type="file"
            id="file-input"
            style={{ display: "none" }}
            accept="image/*"
            onChange={(e) => {
              if (e.target.files) {
                setImage(e.target.files[0]);
              }
            }}
          />
          <label htmlFor="file-input">
            <IconButton
              as="span"
              variant="outline"
              colorScheme="green"
              aria-label="Call Sage"
              fontSize="20px"
              borderRadius={10}
              icon={<LuImagePlus />}
            />
          </label>
          <Button
            colorScheme="teal"
            size="md"
            borderRadius={20}
            px={10}
            onClick={handlePostReplies}
          >
            Post
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default FormPostReplies;
