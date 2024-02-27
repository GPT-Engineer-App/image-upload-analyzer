import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack, useToast, Image } from "@chakra-ui/react";
import { FaSignInAlt, FaUserPlus, FaCloudUploadAlt } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  // Placeholder function for login
  const handleLogin = async (e) => {
    e.preventDefault();
    // Implement the login API call here
    toast({
      title: "Login Attempted",
      description: "This would login with the API",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  // Placeholder function for signup
  const handleSignup = async (e) => {
    e.preventDefault();
    // Implement the signup API call here
    toast({
      title: "Signup Attempted",
      description: "This would signup with the API",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  // Placeholder function for file upload
  const handleFileUpload = async (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      // Implement the file upload API call here
      toast({
        title: "File Uploaded",
        description: "This would upload the file for analysis",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent>
      <VStack spacing={4} marginY={10}>
        <Heading>Welcome to Image Analyzer</Heading>
        <Image src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYW1lcmF8ZW58MHx8fHwxNzA5MDIzMDIwfDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" marginY={5} />
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <VStack spacing={4} align="stretch" width="100%">
          <Button leftIcon={<FaSignInAlt />} colorScheme="blue" onClick={handleLogin}>
            Login
          </Button>
          <Button leftIcon={<FaUserPlus />} colorScheme="green" onClick={handleSignup}>
            Signup
          </Button>
          <Box>
            <input type="file" id="file-upload" hidden onChange={handleFileUpload} />
            <Button leftIcon={<FaCloudUploadAlt />} colorScheme="teal" onClick={() => document.getElementById("file-upload").click()}>
              Upload Image
            </Button>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
