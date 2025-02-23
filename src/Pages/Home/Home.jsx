
import { Helmet } from 'react-helmet';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Header from './header';


const Home = () => {
  
      
      
      return (
            <div>
                  <Helmet>
                        <title>Food Connect</title>
                  </Helmet>
            <Navbar></Navbar>
            <Header></Header>
           <Cards></Cards>
           <Footer></Footer>

          

           
           
           
            </div>
      );
};

export default Home;