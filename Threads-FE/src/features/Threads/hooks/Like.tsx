// import React, { useState } from "react";
// import { api } from "../../../libs/api";
// import { IconButton } from "@chakra-ui/react";
// import { GoHeartFill } from "react-icons/go";

// interface PostProps {
//   postId: number;
//   userId: number; // ID pengguna yang sedang login
// }

// const Post: React.FC<PostProps> = ({ postId, userId }) => {
//   const [liked, setLiked] = useState(false);

//   const handleLike = async () => {
//     try {
//       const response = await api.post<{ user: number; threads: number }>(
//         "/likes",
//         {
//           user: String(userId), // Mengonversi nilai ID pengguna menjadi string
//           threads: postId,
//         }
//       );
//       console.log(response.data);
//       setLiked(!liked);
//     } catch (error) {
//       console.error("Error liking post:", error);
//     }
//   };

//   return (
//     <div className="post">
//       <IconButton
//         variant="unstyled"
//         colorScheme={liked ? "red" : "white"} // Gunakan warna merah jika liked true, dan putih jika tidak
//         aria-label="Like"
//         fontSize="20px"
//         borderRadius={10}
//         icon={<GoHeartFill />}
//         onClick={handleLike}
//       />
//     </div>
//   );
// };

// export default Post;
// import React, { useState } from "react";
// import { api } from "../../../libs/api";
// import { IconButton } from "@chakra-ui/react";
// import { GoHeartFill } from "react-icons/go";

// interface PostProps {
//   postId: number;
//   userId: number;
//   like?: string; // ID pengguna yang sedang login
// }

// const Post: React.FC<PostProps> = ({ postId, userId, like }) => {
//   const [liked, setLiked] = useState<Boolean>(false);

//   const handleLike = async () => {
//     try {
//       const response = await api.post("/likes", {
//         user: String(userId),
//         threads: postId,
//         like,
//       });

//       if (response.data.message === "like removed") {
//         setLiked(false);
//       } else {
//         setLiked(true);
//       }
//       console.log(response.data);
//       // Dapat mengabaikan nilai response karena nilai liked sudah diubah secara lokal
//     } catch (error) {
//       console.error("Error liking post:", error);
//       // Jika terjadi kesalahan, kembalikan nilai liked ke kondisi sebelumnya
//       setLiked(!liked);
//     }
//   };

//   return (
//     <div className="post">
//       <IconButton
//         variant="unstyled"
//         aria-label="Like"
//         fontSize="20px"
//         borderRadius={10}
//         icon={<GoHeartFill color={liked ? "red" : "white"} />}
//         onClick={handleLike}
//       />
//     </div>
//   );
// };

// export default Post;
//yang kedua mending
import React, { useState, useEffect } from "react";
import { api } from "../../../libs/api";
import { IconButton } from "@chakra-ui/react";
import { GoHeartFill } from "react-icons/go";

interface PostProps {
  postId: number;
  userId: number;
}

const Post: React.FC<PostProps> = ({ postId, userId }) => {
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    const storedLiked = localStorage.getItem(`liked_${postId}`);
    if (storedLiked) {
      setLiked(JSON.parse(storedLiked));
    }
  }, [postId]);

  const handleLike = async () => {
    try {
      const response = await api.post("/likes", {
        user: String(userId),
        threads: postId,
      });

      if (response.data.message === "like removed") {
        setLiked(false);
        localStorage.setItem(`liked_${postId}`, JSON.stringify(false));
      } else {
        setLiked(true);
        localStorage.setItem(`liked_${postId}`, JSON.stringify(true));
      }
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  return (
    <div className="post">
      <IconButton
        variant="unstyled"
        aria-label="Like"
        fontSize="20px"
        borderRadius={10}
        icon={<GoHeartFill color={liked ? "red" : "white"} />}
        onClick={handleLike}
      />
    </div>
  );
};

export default Post;
