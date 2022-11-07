import { Box, Heading, Text, Button, Container, Stack } from '@chakra-ui/react';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function MsgNotFound() {
  return (
    <Box display={'flex'} textAlign="center" py={10} px={6} h='60vh' alignContent={'center'} justifyContent='center'>
        <Stack direction={'column'} align='center' justify={'center'} w='50%' margin={'auto'} >
            <Heading
            display="inline-block"
            as="h2"
            color ="#000530"
            size="2xl"
            bgGradient="linear(to-r, '#000530', '#000530', '#000530')"
            backgroundClip="text">
                404
            </Heading>
            <Box m='auto'>
            <Text fontSize="18px" mt={3} mb={2}>
                Thanks
            </Text>
            <Button
                colorScheme='#000530'
                bgGradient="linear(to-r, '#000530', '#000530', '#000530')"
                color="white"
                variant="solid"
                bg='#000530'>
                <Link to={'/home'}>Go to Home</Link>
            </Button>
          </Box>
      </Stack>
    </Box>
  );
}
