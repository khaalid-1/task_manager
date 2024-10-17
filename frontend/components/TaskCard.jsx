import { Box ,Text,IconButton,HStack, useColorModeValue } from "@chakra-ui/react"
import { MdDelete, MdEdit } from "react-icons/md"
 
 
const TaskCard = () => {
    const bgcolor = useColorModeValue("gray.200","gray.700")
    
    
  return (
    <Box
    shadow={"md"}
    rounded={"lg"}
    bg={bgcolor}
  
>

    <Box h={20} bg={"#93D356"}  color={"white"} alignContent={"center"} px={5}>
    <Text fontSize={28}>
        Title One
    </Text>
    </Box>
  <Box px={5} pt={2}>
  <Text  pb={4}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellendus voluptas dolorum minus, sunt esse? Sunt in doloribus nostrum debitis!
       </Text>



    <HStack pb={5}>
    <IconButton icon={<MdEdit/>} colorScheme="green"></IconButton>
    <IconButton icon={<MdDelete/>} colorScheme="red"></IconButton>
    </HStack>
  </Box>

  

</Box>
  )
}

export default TaskCard