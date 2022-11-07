import { Box, Container, Grid, HStack, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProductSimple from '../Commons/CardCar'
import WithBackgroundImage from '../components/Header'
import Simple from '../components/NewsLetter'
import SimpleSidebar from '../components/Sidebar'
import Axios from '../config/axios'


const  Home =   () => {

  const [cars, setCars] = useState({});

  const getCars= async()=>{

    const data = await Axios.get(`/dealer/${40}/vehicules/`)
    try{
      console.log(data.data)
      setCars(data.data)

    }
    catch(err){
      console.log(err)
    }

  }

  useEffect(() => {

    getCars()
    

  }, [])
  



  return (
    <>
     <WithBackgroundImage /> 
        <Stack spacing={8} direction='row'>
          <SimpleSidebar/>
          <Box w={'100%'}>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                  {cars.length &&
                    cars.map((car,i) => (
                      <ProductSimple key={car.id} car={car}/>
                    ))}  
            </Grid> 
          </Box>
        </Stack>
        <Simple/>  
  
  
    </>
  )
}

export default Home