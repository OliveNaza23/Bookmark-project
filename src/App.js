import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import FirstSegment from './Component/FirstSegment';
import Secondsegment from './Component/Secondsegment';
import Thirdsegement from './Component/Thirdsegement';

import Fourthsegement from './Component/Fourthsegement';
import Fifthsegement from './Component/Fifthsegment';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSegment />
      <Secondsegment />
      <Thirdsegement />
      
      <Fourthsegement />
      <Fifthsegement />
      
      <Footer />
    </div>
  );
}

export default App;
