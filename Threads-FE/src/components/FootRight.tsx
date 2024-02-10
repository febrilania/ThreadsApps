import { Card, CardBody, Flex, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const FootRight: React.FC = () => {
  return (
    <>
      <Card mt={5} background={"gray.800"} color={"white"}>
        <CardBody>
          <Flex alignItems={"center"} gap={3}>
            <Text>Developed by Abing •</Text>
            <FaGithub />
            <FaLinkedin />
            <FaFacebook />
            <AiFillInstagram />
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};
export default FootRight;
