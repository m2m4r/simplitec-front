
import Footer from './components/Footer';
import { Box ,Stack,useColorModeValue,} from '@chakra-ui/react'
import ProductDetails from './Commons/ProductDetails';
import { Route, Routes } from "react-router-dom";
import Home from "./Views/Home"
import LoginView from "./Views/LoginView"
import Thanks from './Views/Thanks';
import NotFound from './Views/404';
import MenuTop from './components/Menu';

 

function App() {



  return (
    <div className="App">


      <Box bg={useColorModeValue('gray.100')}>
        <MenuTop/>
        <Routes>
          <Route path="home" element={<Home/>} />
          <Route path="login" element={<LoginView/>} />
          <Route path='product/:model' element={<ProductDetails/>}/>
          <Route path='thanks' element={<Thanks/>}/>          
          <Route path="/*" element={<NotFound/>} />
        </Routes>       
        <Footer/>
      </Box>
    </div>
  );
}

export default App;
