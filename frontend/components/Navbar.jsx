import { Box, Button, Container, Flex, HStack, Text, useColorMode,  } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
const Navbar = () => {

    const {colorMode,toggleColorMode} = useColorMode();
  return (
    <Box shadow={"md"}>
<Container maxW={{ 
      md:"container.md",
      lg:"container.xl"
 }} >
      <Flex
      justifyContent={"space-between"}
      h={16}
      p={2}
      
      >
        <Text
          bgGradient="linear(to-r,#56ab2f , #a8e063)"
          bgClip="text"
          fontSize={{
            base: 30,
            md: 30,
          }}
          fontWeight="extrabold"
        >
          Task Manager 🖊️
        </Text>

        <HStack>
          <Link to={"/"}>
            <Button>
              <CiSquarePlus fontSize={22}  />
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode ==="light" ? <MdLightMode />: <MdOutlineDarkMode />}
          </Button>
        </HStack>
      </Flex>
    </Container>
    </Box>
    
  );
};

export default Navbar;
