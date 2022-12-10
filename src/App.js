import './App.css';
import Circle from './body/circles/Circle';
import Gratitude from './body/gratitude/Gratitude';
import Keep from './body/keepWatch/Keep';
import Why from './body/whyHappy/Why';
import Footer from './common/footer/Footer';
import Header from './common/header/Header';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Gratitude />
        <Keep />
        <div className='svgDiv'>
        {/* <svg className='svgIMG' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L80,186.7C160,149,320,75,480,80C640,85,800,171,960,186.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
        <svg className='svgIMG' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 350"><path fill="#fff" fill-opacity="1" d="M0,160L80,149.3C160,139,320,117,480,133.3C640,149,800,203,960,213.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
        <Circle />
        <Why />
        <Footer />

      </div>
    </>
  );
}

export default App;
