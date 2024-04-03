// import {
//   Flex,
//   Avatar,
//   Heading,
//   Box,
//   Text,
//   Image,
//   IconButton,
// } from "@chakra-ui/react";
// import { GoHeartFill } from "react-icons/go";
// import { LiaComment } from "react-icons/lia";
// import { IThreads } from "../../../interface/Threads";
// import { useNavigate } from "react-router-dom";
// import { format } from "date-fns";
// import Like from "../hooks/Like";

// export default function ListThreads(props: IThreads) {
//   const user = { ...props.user };
//   const navigate: any = useNavigate();

//   return (
//     <>
//       <Box borderBottom={"1px solid gray"}>
//         <Box p={5}>
//           <Flex gap={2} alignItems={"center"}>
//             <Avatar name="Dan Abrahmov" src={user.photo_profile} />
//             <Box>
//               <Heading as="h5" size="sm">
//                 {user.full_name}
//               </Heading>
//               <Text fontSize="sm">@{user.username}</Text>
//             </Box>
//           </Flex>
//           <Box
//             onClick={() => navigate(`/replies/threads/${props.id}`)}
//             cursor={"pointer"}
//           >
//             <Text fontSize="md" my={3} cursor={"ponter"}>
//               {props.content}
//             </Text>
//             {props.image && (
//               <Box boxSize="xs" background={"black"}>
//                 <Image src={props.image} maxH={"300px"} maxWidth={"500px"} />
//               </Box>
//             )}
//           </Box>
//           <Flex gap={1} my={1}>
//             <Text fontSize="sm">
//               {props.created_at
//                 ? format(new Date(props.created_at), "HH:mm - dd MMMM yyyy")
//                 : "No date"}
//             </Text>
//           </Flex>
//           <Flex gap={5}>
//             <Flex alignItems={"center"}>
//               <IconButton
//                 variant="unstyled"
//                 colorScheme="white"
//                 aria-label="Call Sage"
//                 fontSize="20px"
//                 borderRadius={10}
//                 icon={<GoHeartFill />}
//               />
//               <Like threadId={props.id.toString()} />
//               <Text fontSize="sm">{props.likeLength}</Text>
//             </Flex>
//             <Flex alignItems={"center"}>
//               <IconButton
//                 variant="unstyled"
//                 onClick={() => navigate(`/replies/threads/${props.id}`)}
//                 colorScheme="white"
//                 aria-label="Call Sage"
//                 fontSize="20px"
//                 borderRadius={10}
//                 icon={<LiaComment />}
//               />
//               <Text fontSize="sm">{props.repliesLength}</Text>
//             </Flex>
//           </Flex>
//         </Box>
//       </Box>
//     </>
//   );
// }

import {
  Flex,
  Avatar,
  Heading,
  Box,
  Text,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { LiaComment } from "react-icons/lia";
import { IThreads } from "../../../interface/Threads";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import Like from "../hooks/Like";

export default function ListThreads(props: IThreads) {
  const user = { ...props.user };
  const navigate: any = useNavigate();

  return (
    <>
      <Box borderBottom={"1px solid gray"}>
        <Box p={5}>
          <Flex gap={2} alignItems={"center"}>
            <Avatar name={user.full_name} src={user.photo_profile} />
            <Box>
              <Heading as="h5" size="sm">
                {user.full_name}
              </Heading>
              <Text fontSize="sm">@{user.username}</Text>
            </Box>
          </Flex>
          <Box
            onClick={() => navigate(`/replies/threads/${props.id}`)}
            cursor={"pointer"}
          >
            <Text fontSize="md" my={3} cursor={"pointer"}>
              {props.content}
            </Text>
            {props.image && (
              <Box boxSize="xs" background={"black"}>
                <Image src={props.image} maxH={"300px"} maxWidth={"500px"} />
              </Box>
            )}
          </Box>
          <Flex gap={1} my={1}>
            <Text fontSize="sm">
              {props.created_at
                ? format(new Date(props.created_at), "HH:mm - dd MMMM yyyy")
                : "No date"}
            </Text>
          </Flex>
          <Flex gap={5}>
            <Flex alignItems={"center"}>
              <Like postId={props.id} userId={props.user?.id || 0} />
              <Text fontSize="sm">{props.likeLength}</Text>
            </Flex>
            <Flex alignItems={"center"}>
              <IconButton
                variant="unstyled"
                onClick={() => navigate(`/replies/threads/${props.id}`)}
                colorScheme="white"
                aria-label="Call Sage"
                fontSize="20px"
                borderRadius={10}
                icon={<LiaComment />}
              />
              <Text fontSize="sm">{props.repliesLength}</Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
