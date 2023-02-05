
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
  <>
      <Navbar title="textUtils" aboutText="about me"/>
      <div className='container my-3'>
      {/* <About/> */}
      <TextForm heading="Enter the text to be analysed"/>
      </div>
  </>
  );
}

export default App;
