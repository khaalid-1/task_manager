import { Box, useColorModeValue } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"


function App() {
 
  return (
    <Box minH={"100vh"}  bg={useColorModeValue("gray.200","gray.800")} >
      <Navbar/>
      <Outlet />
    </Box>
  )
}

export default App
