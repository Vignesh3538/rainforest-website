import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Main from './components/Main';

function Home(){
    return (
        <div>
        <Navbar />
        <Main />
        <About />
        <Footer />
        </div>
    );
}

export default Home;