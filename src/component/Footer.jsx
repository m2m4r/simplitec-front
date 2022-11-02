import { Box } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{
      width: '100%',
      height:'300px',
      backgroundColor: 'primary.dark',
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      },
      margin:'auto',
      marginTop: '1rem'
    }}>


      
    </Box>
  )
}

export default Footer