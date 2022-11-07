import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({children,label,href,}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg='#000530'
      color='white'>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Mapa del sitio</ListHeader>
            <Link href={'#'}>Categorías</Link>
            <Link href={'#'}>Promociones</Link>
            <Link href={'#'}>Lo más nuevo</Link>
            
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>¿Necesitas ayuda?</ListHeader>
            <Link href={'#'}>Centro de ayuda</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Seguinos</ListHeader>
            <HStack >
              <SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter/>
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaFacebook />
                </SocialButton>
            </HStack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Contáctanos</ListHeader>
            <Link href={'#'}>hola@simplicar.com.ar</Link>
         
          </Stack>

        
        </SimpleGrid>
      </Container>

      <Box>
        <Container
          
          maxW={'6xl'}
          py={10}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
          justifyContent={'center'}
          alignItems={'center'}>
          <Text textAlign={'center'}>© Copyright 2021, Simplicar</Text>
         
        </Container>
      </Box>
    </Box>
  );
}