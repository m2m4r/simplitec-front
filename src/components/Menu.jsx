import {Box,Flex,Text,IconButton,Button,Stack, Collapse,Icon,Popover,PopoverTrigger,PopoverContent,useColorModeValue,useBreakpointValue,useDisclosure,Image,
    Divider,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Center,
    HStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';

  import { Link } from 'react-router-dom';
  import { BsCart4 } from "react-icons/bs";


  import { Avatar } from '@chakra-ui/react';
  import logo from '../assets/logo.svg';
import { useEffect, useState } from 'react';
import CartCard from '../Commons/CartCard';


  export default function MenuTop() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box shadow={'lg'}>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} >
           
              <Box ml='0.5rem' display={'flex'} direction='row' justifyContent={'space-evenly'} w={'20%'} alignItems='center'>
                <Image src={logo} h={useBreakpointValue({ base: 3, md: 5 })}/>
                <Divider orientation='vertical' />
                <svg stroke="currentColor" fill="#45CAFF" strokeWidth="0" viewBox="0 0 24 24" fontSize="l" color="#45CAFF" height="1.5em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(69, 202, 255'}} >
                  <path  padding='2em' fill="#45CAFF" stroke="#000" strokeWidth="0" d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"></path>
                </svg>

                <LocationMenu/>

              </Box>         
          </Flex>
          <Box w={'30%'} color='black'>
            <Stack
              flex={{ base: 1, md: 0 }}
              justifyContent={'normal'}
              align={'center'}
              direction={'row'}
              spacing={6}
             >
               <HStack fontSize={'sm'} justifyContent={'space-evenly'} alignItems='flex-end'>

                <Link to={'/home'} style={{color:'#45CAFF'}}>Inicio</Link>
                <Link to={'/home'} >Novedades</Link>
                <Link to={'/home'} >Últimas ofertas</Link>
                <Link  to={'/home'}>Sobre nosotros</Link> 

               </HStack>
              <Center  h={'10'}>
                <Divider orientation='vertical' />

              </Center>
              <UserMenu/>
            </Stack>



          </Box>
  
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  
  const NAV_ITEMS = [
    {
      label: 'Inspiration',
      children: [
        {
          label: 'Explore Design Work',
          subLabel: 'Trending Design to inspire you',
          href: '#',
        },
        {
          label: 'New & Noteworthy',
          subLabel: 'Up-and-coming Designers',
          href: '#',
        },
      ],
    },
    {
      label: 'Find Work',
      children: [
        {
          label: 'Job Board',
          subLabel: 'Find your dream design job',
          href: '#',
        },
        {
          label: 'Freelance Projects',
          subLabel: 'An exclusive list for contract work',
          href: '#',
        },
      ],
    },
    {
      label: 'Learn Design',
      href: '#',
    },
    {
      label: 'Hire Designers',
      href: '#',
    },
  ];

  const LocationMenu = ()=>{
    return (
      <Menu fontSize={'sm'} background='white'>
        <MenuButton fontSize={'sm'} padding='0 !important' as={Button} background='white' rightIcon={<ChevronDownIcon color={"#45CAFF"} />}>
          Buenos Aires
        </MenuButton>
        <MenuList  fontSize={'sm'} >
          <MenuItem>Uruguay</MenuItem>
          <MenuItem>España</MenuItem>
          <MenuItem>Brasil</MenuItem>
          <MenuItem>Chile</MenuItem>
          
        </MenuList>
      </Menu>

    );
  };

  const UserMenu=()=>{

    const [user, setUser] = useState(true)
    const { isOpen, onOpen, onClose } = useDisclosure()

    console.log(user)

    useEffect(() => {
  
    }, [user])
    


    return (
      <Menu fontSize={'xs'} background='white' >
        <BsCart4 onClick={onOpen} margin={'1rem'}/>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CartCard/>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' color={'#4f64c4'}>Go to Buy</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        {user ?
        <>
        <HStack alignItems={'center'} justifyContent={'space-evenly'}>
          <Avatar size='xs' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' ml='0 !important' />
            <MenuButton fontSize={'sm'} padding='0 !important' as={Button} background='white' m="0 !important" rightIcon= {<ChevronDownIcon color={"#45CAFF"}/> }>
            Martin
            </MenuButton>
        </HStack>
        </>
          
        :
          <>
          <Text color = {"#45CAFF"} m= {'0 !important'} pr='0.5rem' fontSize={'sm'}>
          <Link   to={'/login'}>Sign in</Link>
          </Text>
          </>
        }
          
      </Menu>
    );  
  };