import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const MenuTop = () => {
  return (

    <>
        
        <Box sx={{ width: '100%', backgroundColor:'red', marginTop:'0.5rem' }}>
            <Stack direction='row' spacing={10} justifyContent="space-between" margin={4} marginTop={1} >
                <Box sx={{ width: '10%', backgroundColor:'yellow' }} >
                    <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={3}>
                        <Item>Item 3</Item>
                        <Divider  orientation="vertical" flexItem />
                        <Item>Item 4</Item>
                    </Stack>    
                </Box>
                <Box>
                    <Stack direction='row' spacing={3} marginRight={2}>
                        <Item >Item 1</Item>
                        <Item>Item 2</Item>
                        <Item>Item 3</Item>
                        <Divider  orientation="vertical" flexItem />
                        <Item>Item 4</Item>

                    </Stack>

                </Box>
            </Stack>
        </Box>   
    
    </>
  )
}

export default MenuTop