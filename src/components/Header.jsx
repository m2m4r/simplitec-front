import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Image,
  color,
} from '@chakra-ui/react';

import logo from '../assets/logo.svg';

export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'40vh'}
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
        <Stack maxW={'xl'} align={'baseline'} spacing={6} ml='6rem'>
          <Text
            mt={'0 !important'}
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}>
            <Image src={logo} h={useBreakpointValue({ base: 5, md: 8 }) } color={'white'}/>
          </Text>
          <Text
            mt={'0 !important'}
            color={'white'}
            fontWeight={'extrabold'}
           
            fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}>
            Conocé nuestra oferta de vehiculos y adquirilo 100% online
          </Text>
          <Text
            mt={'1rem !important'}
            color={'white'}
            lineHeight={1.2}
            w={'80%'}
            fontWeight={400}
            fontSize={useBreakpointValue({ base: 'md', md: 'md' })}>
           No esperes más para obtener tu 0km, tenemos las mejores ofertas y planes de financiación
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'#4f64c4'}
              rounded={'lg'}
              fontWeight={'bold'}
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