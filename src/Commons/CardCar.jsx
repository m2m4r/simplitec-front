import {Box,Center,useColorModeValue,Heading,Text,Stack,Image,HStack,Container,VStack,GridItem,} from '@chakra-ui/react';
import { FaRegHeart ,FaDrumSteelpan,BsDoorClosed,FaRegCalendarAlt, AiOutlineCar,FaDoorClosed, FaIdCard,FaCarAlt} from 'react-icons/fa';
import { Divider } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

  const IMAGE =
    'https://autotest.com.ar/wp-content/uploads/2020/08/CHEVROLET-EQUINOX-PORTADA-e1598100170917.jpeg';


  
  export default function ProductSimple({car}) {

    console.log(car)
    const [favorite, setFavorite] = useState('black');
    
    const chooseFavorite = ()=>{
      if(favorite== 'black'){
        setFavorite('#45CAFF')
        localStorage.setItem(`${car.carId}`,JSON.stringify(car))
      }
      else{
        setFavorite('black')
        localStorage.clearItem(`${car.carId}`,car)
      }
    }
  useEffect(() => {


  }, [favorite])
    return (
      <GridItem w='100%'>
        <Center py={8}>
          <Box
            role={'group'}
            p={3}
            maxW={'280px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              pos={'relative'}
              height={'200px'}
            
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image
                rounded={'lg'}
                height={'100%'}
                width={'100%'}
                objectFit={'cover'}
                src={car.images}
              />
            </Box>
            <Stack pt={2} align={'start'} >
              <Container display={'flex'} justifyContent={'space-between'} p={'0'}>  
                    <Text color={'gray.500'} fontSize={'sm'} >
                      {car.brand} {car.model}
                    </Text>
                    <Box display={'inline'} alignItems={'center'} pr={'1rem'}>
                      <FaRegHeart onClick={chooseFavorite} align={'center'} fill={favorite} fontSize={'1.5rem'}/> 
                      
                    </Box>
                
              </Container>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} mt={'0px !important'}>
                $ {car.price * 10000}
              </Heading>
              <Stack direction={'row'} align={'center'} mt={'0px !important'} >
                <Text fontWeight={200} fontSize={'sm'} mt={'0px !important'}>
                  Anticipo $200.000
                </Text>
              </Stack>
              <Container p='0' mt='1.5rem !important' > 
                <Stack direction={'row'} h='50px' p={1} alignItems={'center'} justifyContent='space-evenly'>
                {/* esto se puede hacer con on map y alimentadome de la base datos */}
                  <VStack>
                    <FaRegCalendarAlt fontSize={'2rem'}/>
                    <Text fontSize={'xs'} align='center'>2019</Text>
                  </VStack>
                  <Divider orientation='vertical' color={'gray.500'}  />
                  <VStack>
                    <FaDrumSteelpan fontSize={'2rem'} align='center'/>
                    <Text fontSize={'xs'} align='center'>Automatico</Text>
                  </VStack>
                  
                  <Divider orientation='vertical' color={'gray.500'}  />
                  <VStack  >
                    <FaDoorClosed fontSize={'2rem'} m='auto'/>
                    <Text fontSize={'xs'} align='center'>Hatch</Text>
                  </VStack>
                  
                  <Divider orientation='vertical' color={'gray.500'}  />
                  <VStack>
                    <FaCarAlt fontSize={'2rem'}/>
                    <Text fontSize={'xs'} align='center'>4</Text>  
                  </VStack>              
                </Stack>
              </Container>

            </Stack>
          </Box>
        </Center>
      </GridItem>  
    );
  }