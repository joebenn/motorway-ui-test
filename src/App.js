import React, { useEffect, useState } from 'react';
import './App.css';

//Pages
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    performance.mark('Image Fetch Start');
    fetch('images?limit=12')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
        performance.mark('Image Fetch End');
        console.log(performance.measure('Image Fetch', 'Image Fetch Start', 'Image Fetch End'));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='app'>
      <HomePage images={images} />
    </div>
  );
}

export default App;
