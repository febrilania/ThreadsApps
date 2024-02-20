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
import { ChangeEvent, useState } from "react";
import { Ilogin } from "../interface/interface";
import { api } from "../libs/api";

const Login: React.FC = () => {
  const [loginData, setLoginData] = useState<Ilogin>({
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState<Boolean>(false);

  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.post("/login", loginData);
      console.log("login succes", response.data);
      setIsLogin(true);
      window.location.assign("/");
    } catch (error) {
      console.log("login error", error);
    }
  };

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
          border="1px"
          borderColor={"grey"}
          p={5}
        >
          <form onSubmit={handleSubmit}>
            <FormControl display={"flex"} flexDirection={"column"} gap={4}>
              <Center>
                <Heading color={"#04A51E"}>Circle</Heading>
              </Center>
              <Box>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" onChange={handleChange} />
              </Box>
              <Box>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </Box>
              <Button background={"#04A51E"} type={"submit"}>
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
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Login;
