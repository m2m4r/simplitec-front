import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Container,
  RadioGroup,
  Radio,
  Stack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Input,
  HStack,
 
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'



const LinkItems = [
  { name: 'Todos'},
  { name: 'Sedan'},
  { name: 'Hatch'},
  { name: 'Furgon'},
  { name: 'Pickup' },
];

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')} >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}



const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Container>
      <Box
        
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="10px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        orderWidth='1px' 
        borderRadius='2xl'
        marginTop={'2rem'}
        h="70vh"
        {...rest}>
        <Flex h="50" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="sm"  fontWeight="bold">
            Filtra tu búsqueda
          </Text>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        <Flex  alignItems="start" mx="8"  justifyContent="space-evenly" direction='column'>
          <Text fontSize={"1xl"} mb='2'>Carroceria</Text>
        
          {LinkItems.map((link) => (
            <Checkbox key={link.name} icon={link.icon} mt={'0.5rem'}>
              {link.name}
            </Checkbox>
          ))}
        </Flex>
        <Flex  alignItems="start" mx="8" mt='0.5rem'  justifyContent="space-evenly" direction='column'>
          <Text fontSize={"1xl"} mb='2' mt={'0.5rem'}>Condicion</Text>
          <Checkbox mt={'0.5rem'}  >
            Nuevo
          </Checkbox >
          <Checkbox  mt={'0.5rem'}>
            Usado
          </Checkbox>

          <Text fontSize={"1xl"} mb='2' mt={'1rem'}>Km</Text>

          <RangeSlider defaultValue={[120, 240]} min={0} max={300} step={30}>
            <RangeSliderTrack bg='red.100'>
              <RangeSliderFilledTrack bg='tomato' />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={3} index={0} />
            <RangeSliderThumb boxSize={3} index={1} />
          </RangeSlider>
          
          <Container display={'flex'} direction={'row'} justifyContent={'space-between'} mt='0.5rem'>
         

              <Input htmlSize={1} width='auto' size='xs' />
          
            
              <Input htmlSize={1} width='auto' size='xs' />
            
            
          </Container>
       
        <Text fontSize={"1xl"} mb='2' mt={'0.8rem'}>Color</Text>     
          <RadioGroup >
            <Stack direction='row' mt={'0.5rem'}>
              <Radio value='1'></Radio>
              <Radio value='2'></Radio>
              <Radio value='3'></Radio>
            </Stack>
          </RadioGroup>
        </Flex>

        
 
        <Flex  alignItems="start" mx="8" mt={'0.5rem'}  justifyContent="space-evenly" direction='column'>
          <Text fontSize={"1xl"} mb='2' mt={'1rem'}>Combustible</Text>
          <Checkbox mt={'0.5rem'}  >
            Nafta
          </Checkbox >
          <Checkbox  mt={'0.5rem'}>
            Electrico
          </Checkbox>
       
        </Flex>


        
      </Box>
    </Container>
  );
};


const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Filtra tu busqueda
      </Text>
    </Flex>
  );
};