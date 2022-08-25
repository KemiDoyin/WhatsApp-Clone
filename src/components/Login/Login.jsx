import {VStack, ButtonGroup, FormControl, FormLabel, Button, FormErrorMessage, Input} from '@chakra-ui/react'

const Login = () => {
  return <VStack as ='form' w={{base: '80%', md: '600px'}} m='auto' justify='center' h='100vh' spacing='12px'>

    <FormControl>
    <FormLabel>Username</FormLabel>        
    <Input name='username' placeholder='your username'/>
    <FormErrorMessage>Invalid email</FormErrorMessage>
    </FormControl>
    <FormControl>
    <FormLabel>Password</FormLabel>        
    <Input name='password' placeholder='your username'/>
    <FormErrorMessage>Invalid password</FormErrorMessage>
    </FormControl>
    <ButtonGroup>
        <Button colorScheme='blue' type='submit'>Login</Button>
        <Button>Sign Up</Button>
    </ButtonGroup>
    </VStack>
  
}

export default Login;