// import { FormControl, Input, Box, Flex } from "@chakra-ui/react";
// import { MdPersonSearch } from "react-icons/md";

// const FormSearch: React.FC = () => {
//   return (
//     <>
//       <Box p={5}>
//         <FormControl>
//           <Flex
//             px={5}
//             py={3}
//             background={"gray.800"}
//             alignItems={"center"}
//             borderRadius={20}
//             gap={5}
//           >
//             <MdPersonSearch />
//             <Input
//               type="text"
//               color={"white"}
//               placeholder="Search"
//               variant={"unstyled"}
//             />
//           </Flex>
//         </FormControl>
//       </Box>
//     </>
//   );
// };
// export default FormSearch;
import React from "react";
import { FormControl, Input, Box, Flex } from "@chakra-ui/react";
import { MdPersonSearch } from "react-icons/md";

interface FormSearchProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>; // Properti untuk mengatur nilai pencarian
}

const FormSearch: React.FC<FormSearchProps> = ({ setSearchTerm }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); // Memperbarui nilai pencarian saat input berubah
  };

  return (
    <>
      <Box p={5}>
        <FormControl>
          <Flex
            px={5}
            py={3}
            background={"gray.800"}
            alignItems={"center"}
            borderRadius={20}
            gap={5}
          >
            <MdPersonSearch />
            <Input
              type="text"
              color={"white"}
              placeholder="Search"
              variant={"unstyled"}
              onChange={handleInputChange} // Memanggil fungsi saat input berubah
            />
          </Flex>
        </FormControl>
      </Box>
    </>
  );
};
export default FormSearch;
