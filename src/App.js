
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
  <>
      <Navbar title="ABCD" aboutText="about me"/>
      <div className='container my-3'>
      <TextForm heading="Enter the text to be analysed"/>
      </div>
  </>
  );
}

export default App;
