import { Checkbox, Container, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Slider, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const SideBarSearch = () => {

    function valuetext(value) {
        return `${value}°C`;
      }
      
       
        const [value, setValue] = React.useState([20, 37]);
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        
    }

  return (
    <>
    <Stack direction="column" justifyContent="center" alignItems="center" height={'75%'}>

        <Box sx={{backgroundColor:"red",width: '80%',height:'100%',alignSelf: 'center' , margin:'auto'}}>

            <Stack flexWrap={'wrap'}>
            <h4>Filtra tu búsqueda</h4>

            <h4>Carrocería</h4>


                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    <FormControlLabel  control={<Checkbox />} label="Disabled" />
                    <FormControlLabel  control={<Checkbox />} label="Disabled" />
                    <FormControlLabel  control={<Checkbox />} label="Disabled" />
                    <FormControlLabel  control={<Checkbox />} label="Disabled" />
                    <FormControlLabel  control={<Checkbox />} label="Disabled" />
                </FormGroup>

                <h4>Condición</h4>

                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    <FormControlLabel  control={<Checkbox />} label="Disabled" />
                    
                </FormGroup>

                <h4>Km</h4>

                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    />

                <h4>Color</h4>

                <FormControl sx={{backgroundColor:"white"}}>
                    <FormLabel id="color">Color</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="color"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                <h4>Combustible</h4>

                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    <FormControlLabel  control={<Checkbox />} label="Disabled" />
                    
                </FormGroup>

            </Stack>


        </Box>


    </Stack>
    
    </>
  )
}

export default SideBarSearch