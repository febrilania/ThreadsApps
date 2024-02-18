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

const Login: React.FC = () => {
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
          <FormControl display={"flex"} flexDirection={"column"} gap={4}>
            <Center>
              <Heading color={"#04A51E"}>Circle</Heading>
            </Center>
            <Box>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </Box>
            <Box>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </Box>
            <Button background={"#04A51E"}>Login</Button>
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
