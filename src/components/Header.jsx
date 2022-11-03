import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'30vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        align={'baseline'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'baseline'} spacing={6} ml='5rem'>
          <Text
            mt={'0 !important'}
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}>
            SimpliTec
          </Text>
          <Text
            mt={'0 !important'}
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}>
            Conocé nuestra oferta de vehiculos y adquirilo 100% online
          </Text>
          <Text
            mt={'0 !important'}
            color={'white'}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: 'l', md: '1xl' })}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}>
              Conocer ofertas
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}