import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import SideBarSearch from '../commons/SideBarSearch';

const Main = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));



  return (

    
        <Box fixed sx={{
            width: '100%',
            height:'800px',
            backgroundColor: 'green',
            margin:'auto',
            marginTop: '2rem'
        }}>
            <Stack direction='row' spacing={5}  justifyContent="space-between">
           
                <Box sx={{
                        width: '25%',

                        backgroundColor: 'yellow',
                        height: '800px'

                        }}>
                    <SideBarSearch/>        


                </Box>
                <Box sx={{
                        width: '75%',
                        height: '800px',
                        backgroundColor: 'orange',
                        }}


                
                ></Box>

            </Stack>
    
    
            
        </Box>
  )
}

export default Main