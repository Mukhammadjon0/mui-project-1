import './App.css';
import Album from './components/Album';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Album />
      <Footer />
    </div>
  );
}

export default App;
