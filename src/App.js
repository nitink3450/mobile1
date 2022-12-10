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
        <Circle />
        <Why />
        <Footer />

      </div>
    </>
  );
}

export default App;
