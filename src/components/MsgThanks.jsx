import { Box, Heading, Text, Button, Container, Stack } from '@chakra-ui/react';
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function MsgThanks() {
  return (
    <Box display={'flex'} textAlign="center" py={10} px={6} h='60vh' alignContent={'center'} justifyContent='center'>
        <Stack direction={'column'} align='center' justify={'center'} w='50%' margin={'auto'} >
            <Heading
                display="inline-block"
                as="h2"
                size="3xl"
                bgGradient="linear(to-r, teal.400, teal.600)"
                backgroundClip="text">
                <BsFillCheckCircleFill boxSize={'70px'} color={'#000530'}/>
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
                Go to Home
            </Button>
          </Box>
      </Stack>
    </Box>
  );
}