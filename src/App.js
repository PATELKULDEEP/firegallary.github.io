import React, {useState} from 'react';
import Home from './components/home'
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Title from './components/Title';

function App() {

  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="App">
      <Title/>
      <Home/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
