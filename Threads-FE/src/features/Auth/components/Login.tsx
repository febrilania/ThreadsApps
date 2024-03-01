import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Center,
  Text,
  Link,
} from "@chakra-ui/react";
import { useLogin } from "../hooks/useLogin";
import { useSelector } from "react-redux";
import { rootState } from "../../../store/types/RootState";

const Login: React.FC = () => {
  const auth = useSelector((state: rootState) => state.auth);
  console.log(auth);
  const { handleLogin, handleChange } = useLogin();
  return (
    <>
      <Box
        h="calc(100vh)"
        background={"black"}
        color={"white"}
        px={"30"}
        pt={"50"}
      >
        <Box
          w={{ lg: "30%", base: "100%" }}
          mx={"auto"}
          background={"gray.800"}
          p={5}
          borderRadius={10}
        >
          <FormControl
            display={"flex"}
            flexDirection={"column"}
            gap={4}
            isRequired
          >
            <Center>
              <Heading color={"#04A51E"}>Circle</Heading>
            </Center>
            <Box>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" onChange={handleChange} />
            </Box>
            <Box>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" onChange={handleChange} />
            </Box>
            <Button
              background={"#04A51E"}
              type={"submit"}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Center>
              <Text>
                if you haven't account,{" "}
                <Link href="/register" color={"blue.400"}>
                  register here
                </Link>
              </Text>
            </Center>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default Login;
