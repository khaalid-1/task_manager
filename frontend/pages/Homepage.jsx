import {   Container, SimpleGrid,Text} from "@chakra-ui/react";
import TaskCard from "../components/TaskCard";
const Homepage = () => {
    const tasks = [1,2,3,4,5,6,7,8,9,10 ];
  return (
    <Container maxW={{ 
      md:"container.md",
      lg:"container.xl"
 }}  mt={10} px={14}>
       <Text
          fontSize={{
            base: 30,
            md: 35,
          }}
          textAlign={"center"}
          fontWeight="extrabold"
          mb={20}
        >
         Latest Task  
        </Text>
        <SimpleGrid
           columns={{ 
                base:1,
               
                md:2,
                lg:3,
                xl:4
            }}
            spacing={5}
            >
            
        {tasks.map((task) => <TaskCard key={task}/>)}
        </SimpleGrid>
        {tasks.length === 0 &&( 
                 <Text
         
                 fontSize={{
                   base: 30,
                   md: 16,
                 }}
                 textAlign={"center"}
                 fontWeight="extrabold"
                 fontStyle={"italic"}
               >
                No Task  available
               </Text>
            )}
    </Container>
  )
}

export default Homepage