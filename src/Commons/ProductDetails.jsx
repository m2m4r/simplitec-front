import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Link,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
  import { BiGasPump } from "react-icons/bi";
  import { AiOutlineClockCircle, AiOutlineCar } from "react-icons/ai";
  import { TbEngine } from "react-icons/tb";
  import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { RiDoorOpenLine } from "react-icons/ri";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'

import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

const images =['https://autotest.com.ar/wp-content/uploads/2020/08/CHEVROLET-EQUINOX-PORTADA-e1598100170917.jpeg','https://autotest.com.ar/wp-content/uploads/2020/08/CHEVROLET-EQUINOX-PORTADA-e1598100170917.jpeg','https://autotest.com.ar/wp-content/uploads/2020/08/CHEVROLET-EQUINOX-PORTADA-e1598100170917.jpeg','https://autotest.com.ar/wp-content/uploads/2020/08/CHEVROLET-EQUINOX-PORTADA-e1598100170917.jpeg','https://autotest.com.ar/wp-content/uploads/2020/08/CHEVROLET-EQUINOX-PORTADA-e1598100170917.jpeg','https://autotest.com.ar/wp-content/uploads/2020/08/CHEVROLET-EQUINOX-PORTADA-e1598100170917.jpeg','https://autotest.com.ar/wp-content/uploads/2020/08/CHEVROLET-EQUINOX-PORTADA-e1598100170917.jpeg']
  
  export default function ProductDetails() {
    return (
      <>
        <VStack align='baseline' p='1rem' color={'blue.500'}>
          <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Inicio</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Autos</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href='#'>Renault Kwid</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

        </VStack>
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex direction={'column'} >
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                'https://autotest.com.ar/wp-content/uploads/2020/08/CHEVROLET-EQUINOX-PORTADA-e1598100170917.jpeg'
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
            <Box h={'4rem'}>
            <HStack>
              {images.map((image,i) => (
                <Box key={i} icon={image} mt={'0.5rem'} boxSize='sm'>
                  <Image src={image} rounded='lg' h={'4rem'}></Image>
                </Box>))}

            </HStack>
            </Box>

            <Box mt={'2rem'} fontWeight={700}>
              <HStack justify={'space-between'}>
                <Text>Caracteristicas destacados</Text>
                <Link>Ver ficha técnica <ChevronRightIcon/></Link>
              </HStack>
            </Box>
            <Box>
              <HStack mt={3} justify={'space-evenly'} color='gray'>
                <Text><BiGasPump fontSize={'28px'}/></Text>
                <Text>Nafta</Text>
                <Text><RiDoorOpenLine fontSize={'28px'}/></Text>
                <Text>4 Puertas</Text>
                <Text><AiOutlineClockCircle fontSize={'28px'}/></Text>
                <Text>2019</Text>
                <Text><AiOutlineCar fontSize={'28px'}/></Text>
                <Text>Compact Sedan</Text>
                <Text><TbEngine fontSize={'28px'}/></Text>
                <Text>Motor 1.6</Text>


              </HStack>
            </Box>

          </Flex>
          <Stack spacing={{ base: 6, md: 10 }} >
            <Box as={'header'} pl='1rem'>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                Renault Kwid
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'l'}>
                Stock disponible
              </Text>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'3xl'}>
                $2.022.800
              </Text>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={800}
                fontSize={'l'}>
                Reserva este auto por $50.000 
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              >
              
              <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                          Seleccioná una versión
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} pl='0'>
                      <Box display={'flex'} direction='row' flexWrap={'wrap'} >
                        <Box w={'50%'}>
                          <Stat px={{ base: 2, md: 4 }}
                              py={'5'}
                              shadow={'xl'}
                              border={'1px solid'}
                              borderColor={'gray.500'}
                              rounded={'lg'}
                              margin={'1rem'}
                              padding={'2rem'}
                              >
                            <StatLabel>Outsider</StatLabel>
                            <StatNumber>$2.022.880</StatNumber>
                          </Stat>
                        </Box>
                        <Box w={'50%'}>
                          <Stat px={{ base: 2, md: 4 }}
                              py={'5'}
                              shadow={'xl'}
                              border={'1px solid'}
                              borderColor={ 'gray.500'}
                              rounded={'lg'}
                              margin={'1rem'}
                              padding={'2rem'}
                              >
                            <StatLabel>Outsider</StatLabel>
                            <StatNumber>$2.022.880</StatNumber>
                          </Stat>
                        </Box>
                        <Box w={'50%'}>
                          <Stat px={{ base: 2, md: 4 }}
                              py={'5'}
                              shadow={'xl'}
                              border={'1px solid'}
                              borderColor={'gray.500'}
                              rounded={'lg'}
                              margin={'1rem'}
                              padding={'2rem'}
                              >
                            <StatLabel>Outsider</StatLabel>
                            <StatNumber>$2.022.880</StatNumber>
                          </Stat>
                        </Box>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
              </Accordion>           
              <Box mt={'1rem'} mb={'2rem'} pl='1rem'>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  fontWeight={'700'}
                  lineHeight={1.1}
                  mb={'4'}>
                  Compartinos algunos datos de contacto
                </Text>
                <HStack mt='2rem'>
                  <FormControl >
                    <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                      Nombre
                    </FormLabel>
                    <Input id="first-name" placeholder="First name" />
                  </FormControl>
                  <FormControl >
                    <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                      Apellido
                    </FormLabel>
                    <Input id="first-name" placeholder="First name" />
                  </FormControl>
                </HStack >
                <HStack mt='2rem' >
                  <FormControl >
                    <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                      Mail
                    </FormLabel>
                    <Input id="first-name" placeholder="First name" />
                  </FormControl>
                  <FormControl >
                    <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                      Telefono
                    </FormLabel>
                    <Input id="first-name" placeholder="First name" />
                  </FormControl>
                 
                </HStack>
                <HStack mt='2rem' >
                  <FormControl >
                    <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                      Radicación del vehiculo
                    </FormLabel>
                    <Input id="first-name" placeholder="First name" w={'50%'} />
                  </FormControl>

                 
                </HStack>

                <Checkbox mt={50} defaultChecked>Acepto los términos y condiciones</Checkbox>
                <Button
                  rounded={'3xl'}
                  w={'full'}
                  mt={100}
                  size={'lg'}
                  
                  py={'7'}
                  bg={useColorModeValue('gray.900', 'gray.50')}
                  color={useColorModeValue('white', 'gray.900')}
                  textTransform={'uppercase'}
                  _hover={{
                    transform: 'translateY(2px)',
                    boxShadow: 'lg',
                  }}>
                  Cotizar
                </Button>
              </Box>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Container h={'25vh'}></Container>
      </>
    );
  }