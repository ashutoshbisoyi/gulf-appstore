import Feed from './components/Feed';
import Footer from './components/global/Footer';
import Navigation from './components/global/Navigation';
import HeroComponent from './components/HeroComponent';
import './styles/main.scss';

const App = () => {
  return (
    <div>
      <Navigation />
      <HeroComponent />
      <Feed />
      <Footer />
    </div>
  );
};

export default App;
