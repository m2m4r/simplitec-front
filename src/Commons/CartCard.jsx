import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

  const IMAGE =
  'https://autotest.com.ar/wp-content/uploads/2020/08/CHEVROLET-EQUINOX-PORTADA-e1598100170917.jpeg';
  
  export default function CartCard() {
    return (
      <Center py={6}>
        <Stack
          borderWidth="1px"
          
          w={{ sm: '50%', md: '75%' }}
          height={{ sm: '120px', md: '6rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          padding={2}>
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={IMAGE }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'sm'} fontFamily={'body'}>
              Modelo
            </Heading>


          </Stack>
        </Stack>
      </Center>
    );
  }