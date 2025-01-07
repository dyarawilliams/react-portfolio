import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
// import About from './components/About/About';
// import Services from './components/Services/Services';
// import Experience from './components/Experience/Experience';
// import Works from './components/Works/Works';
// import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className='main container'>
        <Intro />
        {/* <About />
        <Services />
        <Experience />
        <Works />
        <Portfolio /> */}

      </main>
    </div>
  );
}

export default App;
