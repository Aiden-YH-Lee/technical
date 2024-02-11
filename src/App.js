import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ApplicationsOpen from './components/ApplicationsOpen';
import Information from './components/Information';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <ApplicationsOpen />
      <Information />
      <Footer />
    </div>
  );
}

export default App;
