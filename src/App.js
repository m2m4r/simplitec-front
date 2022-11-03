
import WithSubnavigation from './components/Menu'

import LargeWithAppLinksAndSocial from './components/Footer';
import SimpleSidebar from './components/Sidebar';
import { Box ,Stack,useColorModeValue,} from '@chakra-ui/react'
import Simple from './components/NewsLetter';
import ProductSimple from './Commons/CardCar';
import WithBackgroundImage from './components/Header';
import ProductDetails from './Commons/ProductDetails';

function App() {
  return (
    <div className="App">
      <Box bg={useColorModeValue('gray.100')}>
        <WithSubnavigation/>
{/*         <WithBackgroundImage />  
        <Stack spacing={8} direction='row'>
          <SimpleSidebar/>
          <Box>
            <ProductSimple/>
          </Box>
      
        </Stack>


        <Simple/> */}

        <ProductDetails/>
        <LargeWithAppLinksAndSocial/>
      </Box>
    </div>
  );
}

export default App;
